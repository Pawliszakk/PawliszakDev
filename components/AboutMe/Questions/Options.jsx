import classes from './Options.module.css';
import { FaReact, FaRegLightbulb } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { TbUserQuestion } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Options = ({ option, onContentChange }) => {
	const optionsItems = [
		{ text: 'Skills', icon: <FaReact /> },
		{ text: 'Why started', icon: <FaRegLightbulb /> },
		{ text: 'Why kept going', icon: <BiCodeAlt /> },
		{ text: 'Willing to do', icon: <TbUserQuestion /> },
	];
	return (
		<ul className={classes.options}>
			{optionsItems.map((item, i) => (
				<motion.li
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					whileTap={{ scale: 0.7 }}
					whileHover={{ scale: 0.9 }}
					key={i}
					onClick={() => onContentChange(i)}
					className={i === option ? classes.active : null}
				>
					{item.text}
					{item.icon}
				</motion.li>
			))}
		</ul>
	);
};

export default Options;
