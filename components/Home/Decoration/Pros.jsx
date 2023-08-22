import classes from './Pros.module.css';
import { motion } from 'framer-motion';
const Pros = ({ title, icon, text, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: -50, translateY: -50 }}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ delay: index * 0.4 }}
			className={classes.pros}
		>
			{icon}
			<h2>{title}</h2>
			<p>{text}</p>
		</motion.div>
	);
};

export default Pros;
