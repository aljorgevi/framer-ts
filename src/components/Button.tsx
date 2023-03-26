import React, { FC } from 'react'
import { motion as m, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ButtonProps {
	to?: string
	children: React.ReactNode
}

const buttonVariants: Variants = {
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

const Button: FC<ButtonProps> = ({ to = '/base', children }) => {
	return (
		<Link to={to}>
			<m.button variants={buttonVariants} whileHover='hover'>
				{children}
			</m.button>
		</Link>
	)
}

export default Button
