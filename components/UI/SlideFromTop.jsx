import { motion } from 'framer-motion';

const SlideFromTop = ({ className, children, index }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, translateX: -50, translateY: -50 }}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ delay: index * 0.4 }}
		>
			{children}
		</motion.div>
	);
};

export default SlideFromTop;
