import AnswerHeading from '../../../../../UI/Answers/AnswerHeading';
import SkillIcon from './SkillIcon';
import classes from './TechList.module.scss';

interface TechListProps {
	list: {
		icon: JSX.Element;
		text: string;
		type: string;
	}[];
	heading: string;
}

const TechList: React.FC<TechListProps> = ({ list, heading }) => {
	const techList = list.map((icon, i) => <SkillIcon key={i} icon={icon} />);

	return (
		<>
			<AnswerHeading>{heading}</AnswerHeading>
			<ul className={classes.tech}>{techList}</ul>
		</>
	);
};

export default TechList;
