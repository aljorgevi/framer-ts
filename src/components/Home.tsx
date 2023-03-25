import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

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
				<m.button animate={{}}>Create Your Pizza</m.button>
			</Link>
		</m.div>
	)
}

export default Home
