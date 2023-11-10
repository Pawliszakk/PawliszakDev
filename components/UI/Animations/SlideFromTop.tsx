import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideFromTopProps {
	className?: string;
	children: ReactNode;
	index: number;
}

const SlideFromTop: React.FC<SlideFromTopProps> = ({
	className,
	children,
	index,
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, x: -50, y: -50 }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ delay: index * 0.4 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};

export default SlideFromTop;
