import { motion as m } from 'framer-motion'
import { pageAnimation } from '../utils/animations'
import Button from './Button'

const Home = () => {
	return (
		<m.div className='home container' {...pageAnimation}>
			<h2>Welcome to Pizza Joint</h2>
			<Button>Create Your Pizza</Button>
		</m.div>
	)
}

export default Home
