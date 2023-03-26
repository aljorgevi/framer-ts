import { motion as m } from 'framer-motion'

const svgVariants = {
	hidden: { rotate: -180 },
	show: {
		rotate: 0,
		transition: {
			duration: 1
		}
	}
}

const pathVariants = {
	hidden: {
		opacity: 0,
		// Path length is the length of the path. We can use this to animate the path.
		pathLength: 0
	},
	show: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: 'easeInOut'
		}
	}
}

const Logo = () => (
	<m.svg
		className='pizza-svg'
		viewBox='0 0 100 100'
		variants={svgVariants}
		initial='hidden'
		animate='show'
	>
		<m.path
			fill='none'
			d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
			variants={pathVariants}
		/>
		<m.path fill='none' d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z' variants={pathVariants} />
	</m.svg>
)

export default Logo
