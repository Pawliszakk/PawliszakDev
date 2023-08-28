import SlideFromTop from '../../UI/SlideFromTop';
import classes from './Pros.module.css';

const Pros = ({ title, icon, text, index }) => {
	return (
		<SlideFromTop className={classes.pros} index={index}>
			{icon}
			<h2>{title}</h2>
			<p>{text}</p>
		</SlideFromTop>
	);
};

export default Pros;
