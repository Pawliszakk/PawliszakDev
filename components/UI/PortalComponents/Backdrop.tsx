import { motion } from 'framer-motion';
import classes from './Backdrop.module.scss';
import Portal from '../../../src/lib/Portal';

interface BackdropProps {
	onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
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
