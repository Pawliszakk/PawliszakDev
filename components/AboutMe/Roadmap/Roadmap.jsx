import SectionTitle from '../../UI/SectionTItle';
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

const Roadmap = () => {
	const roadmapStops = [
		{
			name: 'HTML5/CSS3',
			icons: (
				<>
					<AiFillHtml5 /> <FaCss3Alt />
				</>
			),
		},
		{
			name: 'SASS/SCSS',
			icons: <BiLogoSass />,
		},
		{
			name: 'JS ES6+',
			icons: <BiLogoJavascript />,
		},
		{
			name: 'REACT.JS',
			icons: <FaReact />,
		},
		{
			name: 'NEXT.JS',
			icons: <SiNextdotjs />,
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
		},
		{
			name: 'NODE.JS',
			icons: <AiFillHtml5 />,
		},
	];
	return (
		<section id="roadmap" className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>

			<Timeline stopsList={roadmapStops} />
		</section>
	);
};

export default Roadmap;
