import { motion as m } from 'framer-motion'
import { useEffect } from 'react'

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw'
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			// higher mass means it moves slower, lower mass means it moves faster.
			mass: 0.4,
			// damping is how much it bounces back. Is the strength of the opposing force. A higher damping mean less osciliation
			damping: 8,
			// delay: 0.5,
			// here we say we want to complete the animation before the children are animated.
			when: 'beforeChildren',
			// we can also stagger the children. This means that it stagger the children by 0.4 seconds. So all animate one after another for a nice little effect.
			staggerChildren: 0.4
		}
	},
	exit: {
		x: '-100vw',
		transition: {
			ease: 'easeInOut'
		}
	}
}

const childVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
}

const Order = ({ pizza, toggle, setShowModal }) => {
	useEffect(() => {
		setTimeout(() => {
			toggle()
		}, 5000)

		return () => setShowModal(false)
	}, [])

	return (
		<m.div
			className='container order'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<h2>Thank you for your order :)</h2>

			<m.p variants={childVariants}>You ordered a {pizza.base} pizza with:</m.p>
			<m.div variants={childVariants}>
				{pizza.toppings.map(topping => (
					<div key={topping}>{topping}</div>
				))}
			</m.div>
		</m.div>
	)
}

export default Order
