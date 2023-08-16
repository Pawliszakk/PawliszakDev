
import classes from './SpecialLink.module.css';
const SpecialLink = ({ href, children, type }) => {


	return (
		<a href={href} target="_blank" className={classes.link}>
			{children}
		</a>
	);
};

export default SpecialLink;
