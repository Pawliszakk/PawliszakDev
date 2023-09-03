import { Typewriter } from 'react-simple-typewriter';
import LinkButton from '../../UI/buttons/LinkButton';
import classes from './HeroText.module.scss';
import { useTranslation } from 'react-i18next';

const HeroText = () => {
	const [t, i18n] = useTranslation('global');

	const typeWriterWords = [
		t('homepage.header.typewritter1'),
		t('homepage.header.typewritter2'),
		t('homepage.header.typewritter3'),
		t('homepage.header.typewritter4'),
	];

	return (
		<div className={classes.box}>
			<h1>
				{t('homepage.header.h1')}
				<br />
				<span className={classes.heroSpan}>{t('homepage.header.span')}</span>
			</h1>
			<p>
				{t('homepage.header.typewritterword')}
				<Typewriter
					loop={10}
					typeSpeed={100}
					cursor
					delaySpeed={2000}
					words={typeWriterWords}
				/>
			</p>
			<div className={classes.links}>
				<LinkButton href="/contact">{t('nav.contact')}</LinkButton>
				<LinkButton href="/about-me">{t('nav.about')}</LinkButton>
			</div>
		</div>
	);
};

export default HeroText;
