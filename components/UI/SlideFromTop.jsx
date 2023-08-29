import { motion } from 'framer-motion';

const SlideFromTop = ({ className, children, index }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, x: -50, y: -50 }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ delay: index * 0.4 }}
		>
			{children}
		</motion.div>
	);
};

export default SlideFromTop;
