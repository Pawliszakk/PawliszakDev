import classes from './StartingOverlay.module.scss';
import { Typewriter } from 'react-simple-typewriter';
const StartingOverlay = () => {
	return (
		<div className={classes.overlay}>
			<p>Hello World!</p>

			<span>
				&lt;
				<Typewriter typeSpeed={80} cursor={false} words={['pawliszakdev/>']} />
			</span>
		</div>
	);
};

export default StartingOverlay;
