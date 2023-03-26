import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion as m, AnimatePresence } from 'framer-motion'

interface ModalProps {
	showModal: boolean
	toggle: () => void
}

const backdrop = {
	hidden: { opacity: 0 },
	show: { opacity: 1 }
}

const modal = {
	hidden: { y: '-100vh', opacity: 0 },
	show: {
		y: '200px',
		opacity: 1,
		transition: {
			delay: 0.5
		}
	}
}

const Modal: FC<ModalProps> = ({ showModal, toggle }) => {
	return (
		<AnimatePresence mode='wait'>
			{showModal && (
				<m.div className='backdrop' variants={backdrop} initial='hidden' animate='show'>
					<m.div className='modal' variants={modal}>
						<p>Want to make another pizza?</p>
						<Link to='/'>
							<button>Start Again</button>
						</Link>
					</m.div>
				</m.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
