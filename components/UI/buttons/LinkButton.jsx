import { motion } from 'framer-motion';
import classes from './LinkButton.module.css';
import { useRouter } from 'next/router';

const LinkButton = ({ href, children }) => {
	const router = useRouter();

	return (
		<motion.button
			whileTap={{ scale: 0.8 }}
			onClick={() => router.push(href)}
			className={classes.btn}
		>
			{children}
		</motion.button>
	);
};

export default LinkButton;
