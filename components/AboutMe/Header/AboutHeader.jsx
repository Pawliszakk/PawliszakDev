import AvatarBlob from '../../UI/AvatarBlob';
import SectionTitle from '../../UI/SectionTItle';
import SlideAnimation from '../../UI/SlideAnimation';
import classes from './AboutHeader.module.css';
import AboutNote from './AboutNote';

const AboutHeader = () => {
	return (
		<header className={classes.header}>
			<SectionTitle>About me</SectionTitle>
			<div className={classes.shadow}></div>

			<div className={classes.box}>
				<SlideAnimation>
					<AvatarBlob
						image="/assets/avatar/avatarBlink.png"
						alt="blinking avatar of pawliszakdev"
						className={classes.blob}
					/>
				</SlideAnimation>
				<AboutNote />
			</div>
		</header>
	);
};

export default AboutHeader;
