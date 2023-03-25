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
						<li key={base} onClick={() => addBase(base)}>
							<span className={spanClass}>{base}</span>
						</li>
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
						<button>Next</button>
					</Link>
				</m.div>
			)}
		</m.div>
	)
}

export default Base
