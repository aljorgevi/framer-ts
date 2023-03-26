import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './svgs/Logo'

const Header = () => {
	return (
		<header>
			<m.div className='logo'>
				<Link to='/'>
					<Logo />
				</Link>
			</m.div>
			<m.div
				drag
				dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
				dragElastic={0.7}
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
