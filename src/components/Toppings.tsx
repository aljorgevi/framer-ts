import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const Toppings = ({ addTopping, pizza }) => {
	const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes']

	return (
		<div className='toppings container'>
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
		</div>
	)
}

export default Toppings
