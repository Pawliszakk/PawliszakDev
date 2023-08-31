import classes from './Questions.module.css';
import SectionTitle from '../../UI/SectionTItle';
import { useState } from 'react';
import Skills from './Answers/Skills';
import WhyStarted from './Answers/WhyStarted';
import WhyKept from './Answers/WhyKept';
import FuturePlans from './Answers/FuturePlans';
import { motion } from 'framer-motion';
import { FaReact, FaRegLightbulb } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import SectionBlock from '../../UI/SectionBlock';
const Questions = () => {
	const [content, setContent] = useState(1);

	const answersComponents = [
		<Skills />,
		<WhyStarted />,
		<WhyKept />,
		<FuturePlans />,
	];
	const optionsItems = [
		{ text: 'Skills', icon: <FaReact /> },
		{ text: 'Why started', icon: <FaRegLightbulb /> },
		{ text: 'Why kept going', icon: <BiCodeAlt /> },
		{ text: 'Willing to do', icon: <FaRegLightbulb /> },
	];

	return (
		<section className={classes.questions}>
			<SectionTitle>More About Me</SectionTitle>

			<div className={classes.box}>
				<ul className={classes.options}>
					{optionsItems.map((item, i) => (
						<motion.li
							initial={{ opacity: 0, y: 200 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileTap={{ scale: 0.82 }}
							key={i}
							onClick={() => setContent(i)}
							className={i === content ? classes.active : null}
						>
							{item.text}
							{item.icon}
						</motion.li>
					))}
				</ul>
				{answersComponents[content]}
			</div>
			<SectionBlock left className={classes.block} />
		</section>
	);
};

export default Questions;
