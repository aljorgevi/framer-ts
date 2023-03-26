import { motion as m } from 'framer-motion'
import Button from './Button'

const Home = () => {
	return (
		<m.div
			className='home container'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.5, duration: 1.5 }}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Button>Create Your Pizza</Button>
		</m.div>
	)
}

export default Home
