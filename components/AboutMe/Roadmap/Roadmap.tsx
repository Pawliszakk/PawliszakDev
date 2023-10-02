import classes from './Roadmap.module.scss';
import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import Timeline from './Timeline';
import { FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { ScrollParallax } from 'react-just-parallax';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<section id="roadmap" className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>
			<p className={classes.text}>{t('about.roadmapText')}</p>
			
			<Timeline />

			<ScrollParallax isAbsolutelyPositioned>
				<FaReact className={`${classes.icon} ${classes.iconFirst}`} />
				<BiLogoNodejs className={`${classes.icon} ${classes.iconSecond}`} />
				<SiNextdotjs className={`${classes.icon} ${classes.iconThird}`} />
				<BiLogoMongodb className={`${classes.icon} ${classes.iconFourth}`} />
			</ScrollParallax>
		</section>
	);
};

export default Roadmap;
