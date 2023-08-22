import classes from './StartingOverlay.module.css';
import { Typewriter } from 'react-simple-typewriter';
const StartingOverlay = () => {
	return (
		<div className={classes.overlay}>
			<p>Hello World!</p>

			<Typewriter typeSpeed={80} cursor={false} words={['<pawliszakdev/>']} />
		</div>
	);
};

export default StartingOverlay;
