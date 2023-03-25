import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const Base = ({ addBase, pizza }) => {
	const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

	return (
		<m.div
			className='base container'
			initial={{ x: '100vw' }}
			animate={{ x: 0 }}
			transition={{ type: 'spring', delay: 0.5 }}
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map(base => {
					const spanClass = pizza.base === base ? 'active' : ''
					return (
						<m.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{
								scale: 1.3,
								color: '#f8e112',
								originX: 0
							}}
							transition={{
								type: 'spring',
								stiffness: 300
							}}
						>
							<span className={spanClass}>{base}</span>
						</m.li>
					)
				})}
			</ul>

			{pizza.base && (
				<m.div
					className='next'
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{
						type: 'spring',
						stiffness: 120
					}}
				>
					<Link to='/toppings'>
						<m.button
							whileHover={{
								scale: 1.1,
								textShadow: '0px 0px 8px rgb(255,255,255)',
								boxShadow: '0px 0px 8px rgb(255,255,255)'
							}}
						>
							Next
						</m.button>
					</Link>
				</m.div>
			)}
		</m.div>
	)
}

export default Base
