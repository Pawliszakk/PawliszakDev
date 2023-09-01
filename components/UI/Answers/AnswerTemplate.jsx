import ShowAnimation from '../Animations/ShowAnimation';
import classes from './AnswerTemplate.module.css';
const AnswerTemplate = ({ children, heading }) => {
	return (
		<ShowAnimation className={classes.box}>
			<h2 className={classes.heading}>{heading}</h2>
			{children}
		</ShowAnimation>
	);
};

export default AnswerTemplate;
