import { motion } from 'framer-motion';
import classes from './Stop.module.css';

const Stop = ({ index, name, icons, text }) => {
	const isEven = index % 2 === 0;

	return (
		<>
			
			<motion.li
				initial={{ opacity: 0, translateX: isEven ? -50 : 50 }}
				whileInView={{ opacity: 1, translateX: isEven ? -20 : 20 }}
				transition={{ delay: index * 0.4 + 0.3 }}
				className={classes.stop}
			>
				<p>{name}</p>
				<div className={classes.icons}>{icons}</div>
				<div className={classes.text}>
					<p>{text}</p>
				</div>
			</motion.li>
		</>
	);
};

export default Stop;
