import SlideFromTop from '../../UI/Animations/SlideFromTop';
import classes from './Pros.module.scss';

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
