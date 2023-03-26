import { motion as m } from 'framer-motion'
import { pageAnimation } from '../utils/animations'
import Button from './Button'
import Loader from './Loader'

const Home = () => {
	return (
		<m.div className='home container' {...pageAnimation}>
			<h2>Welcome to Pizza Joint</h2>
			<Button>Create Your Pizza</Button>
			<Loader />
		</m.div>
	)
}

export default Home
