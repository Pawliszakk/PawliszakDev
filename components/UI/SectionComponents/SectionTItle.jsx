import classes from './SectionTitle.module.css';

const SectionTitle = ({ children, className }) => {
	return (
		<h2 className={`${classes.heading} ${className}`}>&lt;{children}/&gt;</h2>
	);
};

export default SectionTitle;
