import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionBlock';

import classes from './Hero.module.css';

import HeroText from './HeroText';
import SlideAnimation from '../../UI/SlideAnimation';
const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.shadow}></div>
			<div className={classes.container}>
				<SlideAnimation left>
					<AvatarBlob
						image="/assets/avatar/avatarBlink.png"
						alt="avatar of pawliszakDev"
						className={classes.blob}
					/>
				</SlideAnimation>

				<SlideAnimation>
					<HeroText />
				</SlideAnimation>
			</div>
			<SectionBlock left className={classes.block} />
		</section>
	);
};

export default Hero;
