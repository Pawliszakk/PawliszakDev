import classes from './ScrollToSection.module.scss';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface ScrollToSectionProps {
	href: string;
	className?: string;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({
	href,
	className,
}) => {
	return (
		<motion.a
			initial={{ y: 120, opacity: 0 }}
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 0.5 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			href={href}
			className={`${classes.btn} ${className}`}
		>
			<BsFillArrowDownCircleFill />
			<span>Przejdź niżej</span>
		</motion.a>
	);
};

export default ScrollToSection;
