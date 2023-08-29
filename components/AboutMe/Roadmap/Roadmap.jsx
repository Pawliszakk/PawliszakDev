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
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
		},
		{
			name: 'SASS/SCSS',
			icons: <BiLogoSass />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
		},
		{
			name: 'JS ES6+',
			icons: <BiLogoJavascript />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
		},
		{
			name: 'REACT.JS',
			icons: <FaReact />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
		},
		{
			name: 'NEXT.JS',
			icons: <SiNextdotjs />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
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
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
		},
		{
			name: 'NODE.JS',
			icons: <AiFillHtml5 />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
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
