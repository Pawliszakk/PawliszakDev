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
import { ScrollParallax } from 'react-just-parallax';
import SectionBlock from '../../UI/SectionBlock';

const Roadmap = () => {
	const roadmapStops = [
		{
			name: 'HTML5/CSS3',
			icons: (
				<>
					<AiFillHtml5 /> <FaCss3Alt />
				</>
			),
			text: 'In my first 2-3 months of learning Frontend I learned HTML5 semantics, metatags, building website skeletons out of HTML elements. What goes behind html, I learned CSS3, such topics as Responsive Web Design, specifity in css, flexbox, grid, pseudoclasses, pseudoelements etc.  ',
		},
		{
			name: 'SASS/SCSS',
			icons: <BiLogoSass />,
			text: 'The next step in my learning journey was SCSS. I learned how to work with this preprocessor, how to work with SCSS Variables, mixins, @use & @forward. How and why we might work with the Block Element Modifier methodology and make web designs much easier.',
		},
		{
			name: 'JS ES6+',
			icons: <BiLogoJavascript />,
			text: 'The next stage  was JavaScript. I started by understanding the fundamentals of JavaScript, such as variables, data types, operators, connecting to API and control structures. Also I learned ES6+ featured such as const, let, arrow functions, template literals, Array and object destructing, import, export etc.',
		},
		{
			name: 'REACT.JS',
			icons: <FaReact />,
			text: 'The next milestone of my learning journey was React.js. I delved into the captivating realm of React.js . At its core, I learned that React revolves around components. I learned features such as props, renderig lists, conditional content, css modules, state handling, component lifecycle, connecting to Database, managing app wide state with Context, Redux, React Router, working with controlled and uncontrolled forms, and animating React components with framer motion or React Transition Group.',
		},
		{
			name: 'NEXT.JS',
			icons: <SiNextdotjs />,
			text: 'What comes after React.js is his framework - Next.js. At this stage i started exploring the beauty of this technology such as File-based Routing, Page pre-rendering. Data fectching with SSR, SSG (with ISR). Also explored such great feature as API Routes, and working with HTTP request inside of them, and connecting to Database.',
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
			text: 'As im ambitious i started thinking about making Full-Stack applications, so i started learning MERN Stack. I love how MERN offers excellent performance and scalability. With my back office with knowledge of React, MongoDB, and some node.js i wanted to dig deeper into MERN and connect Frontend with Backend and make beautiful Full-Stack Web applications.',
		},
		{
			name: 'NODE.JS',
			icons: <AiFillHtml5 />,
			text: 'Node.js is my next step in learning journey. I want to explore backend, to be more conscious developer and understand the inner workings of web applications from closer look.',
		},
	];
	return (
		<section id="roadmap" className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>
			<Timeline stopsList={roadmapStops} />

			<ScrollParallax isAbsolutelyPositioned>
				<FaReact className={`${classes.icon} ${classes.iconFirst}`} />
				<BiLogoNodejs className={`${classes.icon} ${classes.iconSecond}`} />
				<SiNextdotjs className={`${classes.icon} ${classes.iconThird}`} />
				<BiLogoMongodb className={`${classes.icon} ${classes.iconFourth}`} />
			</ScrollParallax>

			<SectionBlock className={classes.block} />
		</section>
	);
};

export default Roadmap;
