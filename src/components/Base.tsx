import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import Button from './Button'

const containerVariants = {
	// This is basically going to be the same as the initial state.
	// Because really we want it hidden, it's right off the page okay, so we're going to set the x to 100vw.
	// You don't have to call it this hidden, you can call it whatever you want.
	hidden: {
		opacity: 0,
		x: '100vw'
	},
	// This also doesn't have to be called visible, you can call it whatever you want. But it will represent the state that we want to animate to.
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.5
		}
	}
}

const nextVariants = {
	hidden: { x: '-100vw' },
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 120
		}
	}
}

const Base = ({ addBase, pizza }) => {
	const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

	return (
		<m.div
			className='base container'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
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
				<m.div className='next' variants={nextVariants}>
					<Button to='/toppings'>Next</Button>
				</m.div>
			)}
		</m.div>
	)
}

export default Base
