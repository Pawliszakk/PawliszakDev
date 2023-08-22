import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionBlock';

import classes from './Hero.module.css';

import HeroText from './HeroText';
const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.shadow}></div>
			<div className={classes.container}>
				<AvatarBlob
					image="/assets/avatar/avatarBlink.png"
					alt="avatar of pawliszakDev" 
					className={classes.blob}
				/>
				<HeroText />
			</div>
			<SectionBlock left className={classes.block} />
		</section>
	);
};

export default Hero;
