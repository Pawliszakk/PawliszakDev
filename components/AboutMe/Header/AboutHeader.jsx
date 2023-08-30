import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionBlock';

import SlideAnimation from '../../UI/SlideAnimation';

import classes from './AboutHeader.module.css';
import AboutNote from './AboutNote';
import { useTranslation } from 'react-i18next';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const AboutHeader = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<header className={classes.header}>
			<div className={classes.shadow}></div>

			<div className={classes.box}>
				<SlideAnimation>
					<AvatarBlob
						image="/assets/avatar/avatarBlink.png"
						alt="blinking avatar of pawliszakdev"
						className={classes.blob}
					/>
				</SlideAnimation>
				<AboutNote heading={t('about.header')} />
			</div>

			<motion.a
				initial={{ y: 120, opacity: 0 }}
				whileHover={{ scale: 0.9 }}
				whileTap={{ scale: 0.5 }}
				whileInView={{ y: 0, opacity: 1 }}
				href="#roadmap"
				className={classes.btn}
			>
				<BsFillArrowDownCircleFill />
			</motion.a>
			<SectionBlock left className={classes.block} />
		</header>
	);
};

export default AboutHeader;
