import classes from './Modal.module.css';

import { motion, AnimatePresence } from 'framer-motion';
import Portal from '@/lib/Portal';
import Backdrop from './Backdrop';

const Modal = ({ children, onClose, show, icon }) => {
	const dropIn = {
		hidden: {
			top: '-5rem',
			opacity: 0,
		},
		visible: {
			top: '5rem',
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		exit: { top: '-5rem', opacity: 0 },
	};

	return (
		<AnimatePresence>
			{show && (
				<>
					<Portal id='overlay-root'>
						<motion.div
							className={classes.modal}
							variants={dropIn}
							initial="hidden"
							animate="visible"
							onClick={onClose}
						>
							{icon}
							<h2>{children}</h2>
						</motion.div>
					</Portal>
					<Backdrop onClose={onClose} show={show} />
				</>
			)}
		</AnimatePresence>
	);
};

export default Modal;