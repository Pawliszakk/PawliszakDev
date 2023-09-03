import ShowAnimation from '../Animations/ShowAnimation';
import classes from './AnswerTemplate.module.scss';
const AnswerTemplate = ({ children, heading, classNameHeading }) => {
	return (
		<ShowAnimation className={classes.box}>
			<h2 className={`${classes.heading} ${classNameHeading}`}>{heading}</h2>
			{children}
		</ShowAnimation>
	);
};

export default AnswerTemplate;
