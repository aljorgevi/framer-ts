import { type Variants } from 'framer-motion'

export const buttonVariants: Variants = {
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: {
			repeat: Infinity,
			duration: 0.3,
			repeatType: 'reverse'
		}
	}
}

export const pageVariants: Variants = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 1.5
		}
	},
	exit: {
		x: '-100vw',
		transition: {
			ease: 'easeInOut'
		}
	}
}

export const pageAnimation = {
	initial: 'hidden',
	animate: 'show',
	exit: 'exit',
	variants: {
		...pageVariants
	}
}
