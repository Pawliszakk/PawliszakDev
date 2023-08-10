import Image from 'next/image';
import classes from './Skill.module.css';
const Skill = ({ image, text }) => {
	return (
		<div className={classes.skill}>
			<Image src={image} width={40} height={40} />
			<p>{text}</p>
		</div>
	);
};

export default Skill;
