import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import classes from './Hero.module.scss';
import HeroText from './HeroText';
import SlideAnimation from '../../UI/Animations/SlideAnimation';
import SectionHero from '../../UI/SectionComponents/SectionHero';

const Hero = () => {
	return (
		<SectionHero classNameHero={classes.hero}>
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

		</SectionHero>
	);
};

export default Hero;
