import React, { FC } from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../utils/animations'

interface ButtonProps {
	to?: string
	children: React.ReactNode
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
