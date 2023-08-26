import classes from './AvatarText.module.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import SpecialLink from '../../../UI/buttons/SpecialLink';

const AvatarText = () => {
	return (
		<p className={classes.text}>
			I am a passionate React Frontend Developer and this is my tech stack that
			I have achieved in my web development learning journey. If you want to get
			to know me better, click on the <span>About Me</span> button below, which
			will take you to a separate subpage about me. If you want to dig deeper
			into my code, check out my{' '}
			<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
			profile
			<ImQuotesLeft className={classes.quoteLeft} />
			<ImQuotesRight className={classes.quoteRight} />
		</p>
	);
};

export default AvatarText;
