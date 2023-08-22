import { motion, AnimatePresence } from 'framer-motion';
import classes from './Backdrop.module.css';
import Portal from '@/lib/Portal';

const Backdrop = ({ show, onClose }) => {
	return (
		<AnimatePresence>
			{show && (
				<Portal id="backdrop">
					<motion.div
						key="modal"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={classes.backdrop}
						onClick={onClose}
					/>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default Backdrop;
