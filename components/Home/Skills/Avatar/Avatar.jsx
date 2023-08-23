import AvatarBlob from '../../../UI/AvatarBlob';
import SpecialLink from '../../../UI/buttons/SpecialLink';
import classes from './Avatar.module.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { motion } from 'framer-motion';
const Avatar = ({ avatar }) => {
	return (
		<div className={classes.avatar}>
			<motion.div
				className={classes.container}
				initial={{ opacity: 0, translateX: -50 }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{ delay: 0.3 }}
			>
				<AvatarBlob
					image={avatar}
					alt="Avatar of pawliszakDev"
					className={classes.blob}
				/>
			</motion.div>
			<p>
				I am a passionate React Frontend Developer and this is my tech stack
				that I have achieved in my web development learning journey. If you want
				to get to know me better, click on the <span>About Me</span> button
				below, which will take you to a separate subpage about me. If you want
				to dig deeper into my code, check out my{' '}
				<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
				profile
				<ImQuotesLeft className={classes.quoteLeft} />
				<ImQuotesRight className={classes.quoteRight} />
			</p>
		</div>
	);
};

export default Avatar;
