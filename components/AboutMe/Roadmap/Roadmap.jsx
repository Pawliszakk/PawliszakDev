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
			text: 'In my first 2-3 months of learning frontend, I learned HTML5 semantics, metatags, building website skeletons out of HTML elements. What goes behind html, I learned CSS3, topics like responsive web design, specificity in css, flexbox, grid, pseudoclasses, pseudoelements etc.  ',
		},
		{
			name: 'SASS/SCSS',
			icons: <BiLogoSass />,
			text: 'The next step in my learning journey was SCSS. I learned how to work with this pre-processor, how to work with SCSS variables, mixins, @use & @forward. How and why we could work with the Block Element Modifier methodology and make web design much easier.',
		},
		{
			name: 'JS ES6+',
			icons: <BiLogoJavascript />,
			text: 'The next step was JavaScript. I started by understanding the basics of JavaScript such as variables, data types, operators, connecting to the API and control structures. I also learnt ES6+ features such as const, let, arrow functions, template literals, array and object destructing, import, export etc.',
		},
		{
			name: 'REACT.JS',
			icons: <FaReact />,
			text: 'The next milestone in my learning journey was React.js. I delved into the fascinating world of React.js. At its core, I learned that React revolves around components. I learned about features such as props, rendering lists, conditional content, css modules, state handling, component lifecycle, connecting to a database, managing app-wide state with context, redux, React Router, working with controlled and uncontrolled forms, and animating React components with framer motion or React Transition Group.',
		},
		{
			name: 'NEXT.JS',
			icons: <SiNextdotjs />,
			text: 'What comes after React.js is its framework - Next.js. At this stage, I started exploring the beauty of this technology, such as file-based routing, page pre-rendering. Data fectching with SSR, SSG (with ISR). Also explored such great features as API routes, and working with HTTP request inside them, and connecting to database.',
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
			text: 'Being ambitious, I started thinking about building full stack applications, so I started learning MERN Stack. I love how MERN provides excellent performance and scalability. With my back office knowledge of React, MongoDB and some node.js, I wanted to dig deeper into MERN and connect frontend with backend and build beautiful full-stack web applications.',
		},
		{
			name: 'NODE.JS',
			icons: <AiFillHtml5 />,
			text: 'Node.js is the next step in my learning journey. I want to explore the backend, be a more conscious developer and understand the inner workings of web applications from a closer look.',
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
