
import classes from './SpecialLink.module.css';
const SpecialLink = ({ href, children}) => {


	return (
		<a href={href} target="_blank" className={classes.link}>
			{children}
		</a>
	);
};

export default SpecialLink;
