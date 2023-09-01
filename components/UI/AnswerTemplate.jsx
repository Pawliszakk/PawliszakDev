import ShowAnimation from './ShowAnimation';
import classes from './AnswerTemplate.module.css';
const AnswerTemplate = ({ children, heading }) => {
	return (
		<ShowAnimation>
			<h2 className={classes.heading}>{heading}</h2>
			{children}
		</ShowAnimation>
	);
};

export default AnswerTemplate;
