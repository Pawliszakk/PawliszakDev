import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionBlock';

import SlideAnimation from '../../UI/SlideAnimation';

import classes from './AboutHeader.module.css';
import AboutNote from './AboutNote';
import { useTranslation } from 'react-i18next';

import ScrollToSection from '../../UI/buttons/ScrollToSection';

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

			<ScrollToSection href="#roadmap" />
			<SectionBlock left className={classes.block} />
		</header>
	);
};

export default AboutHeader;
