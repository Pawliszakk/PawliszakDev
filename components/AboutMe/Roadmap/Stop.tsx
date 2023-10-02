import classes from './Stop.module.scss';
import { motion } from 'framer-motion';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface StopProps {
	index: number;
	name: string;
	icons: JSX.Element;
	text: string;
}

const Stop: React.FC<StopProps> = ({ index, name, icons, text }) => {
	const isEven = index % 2 === 0;

	return (
		<motion.li
			initial={{ opacity: 0, x: isEven ? -50 : 50 }}
			whileInView={{ opacity: 1, x: isEven ? -20 : 20 }}
			transition={{ delay: index === 0 ? 0.3 : 0.3 + index * 0.1 }}
			className={classes.stop}
		>
			<p>{name}</p>
			<div className={classes.icons}>{icons}</div>
			<AiOutlineInfoCircle className={classes.info} />

			<div className={classes.text}>
				<p>{text}</p>
			</div>
		</motion.li>
	);
};

export default Stop;
