import SectionTitle from '../../UI/SectionComponents/SectionTItle';

import classes from './Roadmap.module.css';
import Timeline from './Timeline';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import {
	BiLogoSass,
	BiLogoJavascript,
	BiLogoMongodb,
	BiLogoNodejs,
} from 'react-icons/bi';
import { SiNextdotjs, SiExpress } from 'react-icons/si';
import { ScrollParallax } from 'react-just-parallax';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
	const [t, i18n] = useTranslation('global');
	const roadmapStops = [
		{
			name: 'HTML5/CSS3',
			icons: (
				<>
					<AiFillHtml5 /> <FaCss3Alt />
				</>
			),
			text: t('about.HTML5/CSS3'),
		},
		{
			name: 'SASS/SCSS',
			icons: <BiLogoSass />,
			text: t('about.SASS/SCSS'),
		},
		{
			name: 'JS ES6+',
			icons: <BiLogoJavascript />,
			text: t('about.JavaScript'),
		},
		{
			name: 'REACT.JS',
			icons: <FaReact />,
			text: t('about.React.js'),
		},
		{
			name: 'NEXT.JS',
			icons: <SiNextdotjs />,
			text: t('about.Next.js'),
		},
		{
			name: 'MERN STACK',
			icons: (
				<>
					<BiLogoMongodb />
					<SiExpress />
					<FaReact />
					<BiLogoNodejs />
				</>
			),
			text: t('about.MERN'),
		},
		{
			name: 'NODE.JS',
			icons: <BiLogoNodejs />,
			text: t('about.Node.js'),
		},
	];

	return (
		<section id="roadmap" className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>
			<p className={classes.text}>
				{t('about.roadmapText')}
			</p>
			<Timeline stopsList={roadmapStops} />

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
