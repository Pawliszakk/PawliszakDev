import classes from './Options.module.scss';
import { FaReact } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { TbUserQuestion } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface OptionsProps {
	option: number;
	onContentChange: (number: number) => void;
}

const Options: React.FC<OptionsProps> = ({ option, onContentChange }) => {
	const [t, i18n] = useTranslation('global');
	const optionsItems = [
		{ text: t('about.option1'), icon: <FaReact /> },
		{ text: t('about.option2'), icon: <BiCodeAlt /> },
		{ text: t('about.option3'), icon: <TbUserQuestion /> },
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
						<motion.div layoutId="indicator" className={classes.indicator}>
							{item.icon}
						</motion.div>
					)}
				</motion.li>
			))}
		</ul>
	);
};

export default Options;
