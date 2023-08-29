import classes from './Modal.module.css';

import { motion } from 'framer-motion';
import Portal from '@/lib/Portal';
import Backdrop from './Backdrop';

const Modal = ({ children, onClose, show, icon }) => {
	return (
		<>
			<Portal id="overlay-root">
				<motion.div
					className={classes.modal}
					initial={{ opacity: 0, top: '-5rem' }}
					animate={{
						opacity: 1,
						top: '5rem',
					}}
					exit={{ opacity: 0, top: '-5rem' }}
					onClick={onClose}
				>
					{icon}
					<h2>{children}</h2>
				</motion.div>
			</Portal>
			<Backdrop onClose={onClose} show={show} />
		</>
	);
};

export default Modal;
