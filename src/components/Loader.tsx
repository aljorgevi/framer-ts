import { motion as m, useCycle } from 'framer-motion'

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				repeat: Infinity,
				duration: 0.5,
				repeatType: 'reverse'
			},
			y: {
				repeat: Infinity,
				duration: 0.25,
				ease: 'easeOut',
				repeatType: 'reverse'
			}
		}
	},
	animationTwo: {
		y: [0, -40],
		x: 0,
		transition: {
			y: {
				repeat: Infinity,
				duration: 0.25,
				ease: 'easeOut',
				repeatType: 'reverse'
			}
		}
	}
}

const Loader = () => {
	const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')

	return (
		<>
			<m.div className='loader' variants={loaderVariants} animate={animation}  />
			<div style={{ cursor: 'pointer' }} onClick={() => cycleAnimation()}>
				Change Loader
			</div>
		</>
	)
}

export default Loader

/*

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				repeat: Infinity,
				duration: 0.5,
				repeatType: 'reverse'
			},
			y: {
				repeat: Infinity,
				duration: 0.25,
				ease: 'easeOut',
				repeatType: 'reverse'
			}
		}
	},
}

const Loader = () => {
	return (
		<>
			<m.div className='loader' variants={loaderVariants} animate="animationOne" />
		</>
	)
}
*/
