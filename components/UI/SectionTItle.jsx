import classes from './SectionTitle.module.css';

const SectionTitle = ({ children, className }) => {
	return <h2 className={`${classes.heading} ${className}`}>{children}</h2>;
};

export default SectionTitle;
