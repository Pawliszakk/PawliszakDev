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
			text: 'In my first 2-3 months of learning Frontend I learned HTML5 semantics, metatags, building website skeletons out of HTML elements. What goes behind html, I learned CSS3, such topics as specifity in css, flexbox, grid, pseudoclasses, pseudoelements etc.  ',
		},
		{
			name: 'SASS/SCSS',
			icons: <BiLogoSass />,
			text: 'The next step in my learning journey was SCSS. I learned how to work with this preprocessor, how to work with SCSS Variables, mixins, @use & @forward. How and why we might work with the Block Element Modifier methodology and make web designs much easier.',
		},
		{
			name: 'JS ES6+',
			icons: <BiLogoJavascript />,
			text: 'The next stage  was JavaScript. I started by understanding the fundamentals of JavaScript, such as variables, data types, operators, and control structures. Also I learned ES6+ featured such as const, let, arrow functions, template literals, Array and object destructing, import, export etc.',
		},
		{
			name: 'REACT.JS',
			icons: <FaReact />,
			text: 'The next milestone of my learning journey was React.js. I delved into the captivating realm of React.js . At its core, I learned that React revolves around components, . With React, I learned to create dynamic and interactive interfaces by composing these components together.  ',
		},
		{
			name: 'NEXT.JS',
			icons: <SiNextdotjs />,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
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
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
		},
		{
			name: 'NODE.JS',
			icons: <AiFillHtml5 />,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas illo et amet voluptates magnam, incidunt doloribus unde non possimus fugit numquam tempora, cumque reprehenderit maxime, quaerat nemo magni enim.',
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
