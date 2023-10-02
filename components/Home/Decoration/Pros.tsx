import SlideFromTop from '../../UI/Animations/SlideFromTop';
import classes from './Pros.module.scss';

interface ProsProps {
	title: string;
	icon: JSX.Element;
	text: string;
	index: number;
}

const Pros: React.FC<ProsProps> = ({ title, icon, text, index }) => {
	return (
		<SlideFromTop className={classes.pros} index={index}>
			{icon}
			<h2>{title}</h2>
			<p>{text}</p>
		</SlideFromTop>
	);
};

export default Pros;
