import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const buttonVariants = {
	// visible: {
	// 	// x: [0, -20, 20, -20, 20, 0], // keyframes
	// 	transition: { delay: 2 }
	// },
	hover: {
		scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)'
	}
}

const Home = () => {
	return (
		<m.div
			className='home container'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.5, duration: 1.5 }}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to='/base'>
				<m.button
					variants={buttonVariants}
					whileHover='hover'
					// animate='visible'
				>
					Create Your Pizza
				</m.button>
			</Link>
		</m.div>
	)
}

export default Home
