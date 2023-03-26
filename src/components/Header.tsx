import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './svgs/Logo'

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<Link to='/'>
					<Logo />
				</Link>
			</div>
			<m.div
				className='title'
				initial={{ y: -250 }}
				animate={{ y: -10 }}
				transition={{ delay: 0.2, stiffness: 120, type: 'spring' }}
			>
				<h1>Pizza Joint</h1>
			</m.div>
		</header>
	)
}

export default Header
