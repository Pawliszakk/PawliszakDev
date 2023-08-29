import { useState } from 'react';

import classes from './Stop.module.css';
import { motion } from 'framer-motion';

const Stop = ({ index, name, icons, text }) => {
	const [isText, setIsText] = useState(false);

	const isEven = index % 2 === 0;

	return (
		<motion.li
			initial={{ opacity: 0, translateX: isEven ? -50 : 50 }}
			whileInView={{ opacity: 1, translateX: isEven ? -20 : 20 }}
			transition={{ delay: index === 0 ? 0.3 : 0.3 + index * 0.1 }}
			className={classes.stop}
			onMouseEnter={() => setIsText(true)}
			onMouseLeave={() => setIsText(false)}
		>
			<p>{name}</p>
			<div className={classes.icons}>{icons}</div>
			{isText && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					className={classes.text}
				>
					<p>{text}</p>
				</motion.div>
			)}
		</motion.li>
	);
};

export default Stop;
