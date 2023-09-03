import classes from './SectionTitle.module.scss';

const SectionTitle = ({ children, className }) => {
	return (
		<h2 className={`${classes.heading} ${className}`}>&lt;{children}/&gt;</h2>
	);
};

export default SectionTitle;
