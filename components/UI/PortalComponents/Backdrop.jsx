import { motion, AnimatePresence } from 'framer-motion';
import classes from './Backdrop.module.css';
import Portal from '@/lib/Portal';

const Backdrop = ({ show, onClose }) => {
	return (
		<AnimatePresence>
			{show && (
				<Portal id='backdrop'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={classes.backdrop}
						onClick={onClose}
					></motion.div>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default Backdrop;
