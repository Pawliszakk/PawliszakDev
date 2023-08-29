import AvatarBlob from '../../UI/AvatarBlob';
import classes from './AboutHeader.module.css';
import AboutText from './AboutText';

const AboutHeader = () => {
	return (
		<header className={classes.header}>
			<AvatarBlob
				className={classes.blob}
				image="/assets/avatar/avatarBlink.png"
				alt="blinking avatar of pawliszakDev"
			/>
			<AboutText />
		</header>
	);
};

export default AboutHeader;
