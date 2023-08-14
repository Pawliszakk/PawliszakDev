import classes from './StartingOverlay.module.css';

const StartingOverlay = () => {
	return (
		<div className={classes.overlay}>
			<p className={classes.greeting}>Hello World</p>
		</div>
	);
};

export default StartingOverlay;
