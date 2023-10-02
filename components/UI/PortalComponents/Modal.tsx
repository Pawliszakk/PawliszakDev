import classes from './Modal.module.scss';

import { motion } from 'framer-motion';
import Portal from '../../../src/lib/Portal';
import Backdrop from './Backdrop';
import { ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	show: boolean;
	icon: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, show, icon }) => {
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
			<Backdrop onClose={onClose} />
		</>
	);
};

export default Modal;
