import classes from './Timeline.module.css';

const Timeline = ({ stopsList }) => {
	const stops = stopsList.map((stop, i) => <li key={i}>{stop.name}</li>);

	return (
		<div className={classes.timeline}>
			<ul>{stops}</ul>
		</div>
	);
};

export default Timeline;
