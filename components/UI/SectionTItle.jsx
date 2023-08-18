import classes from './SectionTitle.module.css';

const SectionTitle = ({ children }) => {
	return <h2 className={classes.heading}>{children}</h2>;
};

export default SectionTitle;
