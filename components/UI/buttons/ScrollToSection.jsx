import classes from './ScrollToSection.module.scss';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
const ScrollToSection = ({ href, className }) => {
	return (
		<motion.a
			initial={{ y: 120, opacity: 0 }}
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 0.5 }}
			whileInView={{ y: 0, opacity: 1 }}
			href={href}
			className={`${classes.btn} ${className}`}
		>
			<BsFillArrowDownCircleFill />
		</motion.a>
	);
};

export default ScrollToSection;
