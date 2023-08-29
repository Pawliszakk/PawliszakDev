import { useState } from 'react';

import classes from './Stop.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineInfoCircle } from 'react-icons/ai';
const Stop = ({ index, name, icons, text }) => {
	const [isText, setIsText] = useState(false);

	const isEven = index % 2 === 0;

	return (
		<motion.li
			initial={{ opacity: 0, x: isEven ? -50 : 50 }}
			whileInView={{ opacity: 1, x: isEven ? -20 : 20 }}
			transition={{ delay: index === 0 ? 0.3 : 0.3 + index * 0.1 }}
			className={classes.stop}
			onMouseEnter={() => setIsText(true)}
			onMouseLeave={() => setIsText(false)}
		>
			<p>{name}</p>
			<div className={classes.icons}>{icons}</div>
			<AiOutlineInfoCircle className={classes.info} />
			<AnimatePresence>
				{isText && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className={classes.text}
					>
						<p>{text}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
};

export default Stop;
