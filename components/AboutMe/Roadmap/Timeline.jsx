import Stop from './Stop';
import classes from './Timeline.module.css';

const Timeline = ({ stopsList }) => {
	const stops = stopsList.map((stop, i) => (
		<Stop index={i} name={stop.name} icons={stop.icons} text={stop.text} />
	));

	return (
		<div className={classes.timeline}>
			<ul>{stops}</ul>
		</div>
	);
};

export default Timeline;
