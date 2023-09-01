import classes from './Options.module.css';
import { FaReact, FaRegLightbulb } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { TbUserQuestion } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Options = ({ option, onContentChange }) => {
	const optionsItems = [
		{ text: 'My Skills', icon: <FaReact /> },
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
					key={i}
					onClick={() => onContentChange(i)}
					className={i === option ? classes.active : null}
				>
					{item.text}

					{i === option && (
						<motion.div layoutId="indicator" className={classes.indicator}><FaReact/></motion.div>
					)}
				</motion.li>
			))}
		</ul>
	);
};

export default Options;
