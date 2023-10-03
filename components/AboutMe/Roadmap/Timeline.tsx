import Stop from './Stop';
import classes from './Timeline.module.scss';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import {
	BiLogoSass,
	BiLogoJavascript,
	BiLogoMongodb,
	BiLogoNodejs,
} from 'react-icons/bi';
import { SiNextdotjs, SiExpress, SiTypescript } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
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
			name: 'TYPESCRIPT',
			icons: <SiTypescript />,
			text: t('about.typescript'),
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

	const stops = roadmapStops.map((stop, i) => (
		<Stop
			key={i}
			index={i}
			name={stop.name}
			icons={stop.icons}
			text={stop.text}
		/>
	));

	return (
		<div className={classes.timeline}>
			<ul>{stops}</ul>
		</div>
	);
};

export default Timeline;
