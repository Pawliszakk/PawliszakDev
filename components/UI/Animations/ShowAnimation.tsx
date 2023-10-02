import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShowAnimationProps {
	children: ReactNode;
	className?: string;
}

const ShowAnimation: React.FC<ShowAnimationProps> = ({
	children,
	className,
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
		>
			{children}{' '}
		</motion.div>
	);
};

export default ShowAnimation;
