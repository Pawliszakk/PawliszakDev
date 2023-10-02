import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';

import SlideAnimation from '../../UI/Animations/SlideAnimation';

import classes from './AboutHeader.module.scss';
import AboutNote from './AboutNote';
import { useTranslation } from 'react-i18next';

import ScrollToSection from '../../UI/buttons/ScrollToSection';
import SectionHero from '../../UI/SectionComponents/SectionHero';

const AboutHeader = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<SectionHero>
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
		</SectionHero>
	);
};

export default AboutHeader;
