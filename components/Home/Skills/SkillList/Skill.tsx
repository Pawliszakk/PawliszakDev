import Image from 'next/image';
import classes from './Skill.module.scss';

interface SkillProps {
	image: string;
	text: string;
}

const Skill: React.FC<SkillProps> = ({ image, text }) => {
	return (
		<div className={classes.skill}>
			<Image src={image} alt={`${text} icon`} width={40} height={40} />
			<p>{text}</p>
		</div>
	);
};

export default Skill;
