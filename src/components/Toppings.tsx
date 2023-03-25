import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

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

const Toppings = ({ addTopping, pizza }) => {
	const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes']

	return (
		<m.div
			className='toppings container'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map(topping => {
					const spanClass = pizza.toppings.includes(topping) ? 'active' : ''
					return (
						<m.li
							key={topping}
							onClick={() => addTopping(topping)}
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
							<span className={spanClass}>{topping}</span>
						</m.li>
					)
				})}
			</ul>

			<Link to='/order'>
				<m.button
					whileHover={{
						scale: 1.1,
						textShadow: '0px 0px 8px rgb(255,255,255)',
						boxShadow: '0px 0px 8px rgb(255,255,255)'
					}}
				>
					Order
				</m.button>
			</Link>
		</m.div>
	)
}

export default Toppings
