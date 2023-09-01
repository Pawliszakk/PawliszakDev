import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import SkillIcon from './SkillItem';
import classes from './TechList.module.css';

const TechList = ({ list, heading }) => {
	const techList = list.map((icon, i) => <SkillIcon key={i} icon={icon} />);

	return (
		<>
			<AnswerHeading>{heading}</AnswerHeading>
			<ul className={classes.tech}>{techList}</ul>
		</>
	);
};

export default TechList;
