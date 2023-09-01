import classes from './Skills.module.css';
import AnswerTemplate from '../../../UI/AnswerTemplate';
import { FaCss3Alt, FaNpm, FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import {
	BiLogoJavascript,
	BiLogoMongodb,
	BiLogoNodejs,
	BiLogoSass,
} from 'react-icons/bi';
import {
	SiEslint,
	SiExpress,
	SiFirebase,
	SiFramer,
	SiNextdotjs,
	SiRedux,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { TbJson } from 'react-icons/tb';

const Skills = () => {
	const techIcons = [
		{ icon: <AiFillHtml5 />, text: 'HTML5', type: 'stack' },
		{ icon: <FaCss3Alt />, text: 'CSS3', type: 'stack' },
		{ icon: <BiLogoSass />, text: 'Sass', type: 'stack' },
		{ icon: <BiLogoJavascript />, text: 'JavaScript', type: 'stack' },
		{ icon: <FaReact />, text: 'React', type: 'stack' },
		{ icon: <SiRedux />, text: 'Redux', type: 'stack' },
		{ icon: <SiNextdotjs />, text: 'Next.js', type: 'stack' },
		{ icon: <BiLogoNodejs />, text: 'Node.js', type: 'stack' },
		{ icon: <SiExpress />, text: 'Express', type: 'stack' },
		{ icon: <BsGit />, text: 'Git', type: 'other' },
		{ icon: <BiLogoMongodb />, text: 'MongoDB', type: 'other' },
		{ icon: <SiFirebase />, text: 'Firebase', type: 'other' },
		{ icon: <FaNpm />, text: 'Npm', type: 'other' },
		{ icon: <SiEslint />, text: 'Eslint', type: 'other' },
		{ icon: <SiFramer />, text: 'Framer', type: 'other' },
		{ icon: <TbJson />, text: 'JSON', type: 'other' },
	];
	const traits = [
		'Fast learner',
		'Open-minded',
		'English B2+',
		'Growth-oriented',
		'Determined',
		'Analytical thinking',
		'Creative',
	];

	const techStack = techIcons.filter((icon) => icon.type === 'stack');
	const otherTech = techIcons.filter((icon) => icon.type === 'other');

	const listRenderHandler = (list) => {
		return list.map((icon) => (
			<li key={icon.text}>
				{icon.icon} <div className={classes.iconText}>{icon.text}</div>
			</li>
		));
	};

	return (
		<AnswerTemplate heading="My Skills">
			<div className={classes.box}>
				<h3>Tech Stack</h3>
				<ul className={classes.tech}>{listRenderHandler(techStack)}</ul>
				<h3>Other</h3>
				<ul className={classes.tech}>{listRenderHandler(otherTech)}</ul>
				<h3>Traits</h3>
				<ul className={classes.traits}>
					{traits.map((trait, i) => (
						<li key={i}>{trait}</li>
					))}
				</ul>
			</div>
		</AnswerTemplate>
	);
};

export default Skills;
