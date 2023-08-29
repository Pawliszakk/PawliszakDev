import classes from './Timeline.module.css';
import { motion } from 'framer-motion';

const Timeline = ({ stopsList }) => {
	const stops = stopsList.map((stop, i) => (
		<motion.li
			initial={{ opacity: 0, translateX: i % 2 == 0 ? -50 : 50 }}
			whileInView={{ opacity: 1, translateX: i % 2 == 0 ? -20 : 20 }}
			transition={{ delay: i * 0.4 + 0.3 }}
			key={i}
		>
			{stop.name}
		</motion.li>
	));

	return (
		<div className={classes.timeline}>
			<ul>{stops}</ul>
		</div>
	);
};

export default Timeline;
