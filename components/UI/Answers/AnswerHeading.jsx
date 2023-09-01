import classes from './AnswerHeading.module.css';
const AnswerHeading = ({ children, className }) => {
	return <h3 className={`${classes.heading} ${className}`}>{children}</h3>;
};

export default AnswerHeading;
