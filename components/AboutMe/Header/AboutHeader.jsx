import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionBlock';

import SlideAnimation from '../../UI/SlideAnimation';
import LinkButton from '../../UI/buttons/LinkButton';
import classes from './AboutHeader.module.css';
import AboutNote from './AboutNote';
import { useTranslation } from 'react-i18next';

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

			<LinkButton href="#roadmap" className={classes.btn}>
				{t('about.checkroadmap')}
			</LinkButton>
			<SectionBlock left className={classes.block} />
		</header>
	);
};

export default AboutHeader;
