import { motion } from 'framer-motion';
import classes from './Backdrop.module.css';
import Portal from '@/lib/Portal';

const Backdrop = ({ onClose }) => {
	return (
		<Portal id="backdrop">
			<motion.div
				className={classes.backdrop}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
			/>
		</Portal>
	);
};

export default Backdrop;
