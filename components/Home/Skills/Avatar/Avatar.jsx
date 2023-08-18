import AvatarBlob from '../../../UI/AvatarBlob';
import SpecialLink from '../../../UI/buttons/SpecialLink';
import classes from './Avatar.module.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Avatar = ({ avatar }) => {
	return (
		<div className={classes.avatar}>
			<AvatarBlob image={avatar} alt="Avatar of pawliszakDev" />
			<p>
				This is my tech stack that I have achieved in my web development
				learning journey. If you want to get to know me better, click on the{' '}
				<span>About Me</span> button below, which will take you to a separate
				subpage about me. If you want to dig deeper into my code, check out my{' '}
				<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
				profile
				<ImQuotesLeft className={classes.quoteLeft} />
				<ImQuotesRight className={classes.quoteRight} />
			</p>
		</div>
	);
};

export default Avatar;
