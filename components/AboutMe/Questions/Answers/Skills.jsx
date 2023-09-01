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
import { MdHttp } from 'react-icons/md';
import {
	TbJson,
	TbLetterR,
	TbLetterE,
	TbLetterS,
	TbLetterT,
} from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const Skills = () => {
	const [t, i18n] = useTranslation('global');

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
		{
			icon: (
				<div className={classes.api}>
					<TbLetterR />
					<TbLetterE />
					<TbLetterS />
					<TbLetterT />
				</div>
			),
			text: 'RestAPI',
			type: 'other',
		},
		{ icon: <TbJson />, text: 'JSON', type: 'other' },
		{ icon: <MdHttp />, text: 'HTTP', type: 'other' },
	];
	const traits = [
		t('about.trait1'),
		t('about.trait2'),
		t('about.trait3'),
		t('about.trait4'),
		t('about.trait5'),
		t('about.trait6'),
		t('about.trait7'),
		t('about.trait8'),
		t('about.trait9'),
		t('about.trait10'),
	];

	const techStack = techIcons.filter((icon) => icon.type === 'stack');
	const otherTech = techIcons.filter((icon) => icon.type === 'other');

	const listRenderHandler = (list) => {
		return list.map((icon) => (
			<li key={icon.text}>
				{icon.icon}{' '}
				<div
					className={`${classes.iconText} ${
						icon.text === 'RestAPI' ? classes.apiText : null
					}`}
				>
					{icon.text}
				</div>
			</li>
		));
	};

	return (
		<AnswerTemplate heading="My Skills">
			<div className={classes.box}>
				<h3>{t('about.techStack')}</h3>
				<ul className={classes.tech}>{listRenderHandler(techStack)}</ul>
				<h3>{t('about.other')}</h3>
				<ul className={classes.tech}>{listRenderHandler(otherTech)}</ul>
				<h3>{t('about.traits')}</h3>
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
