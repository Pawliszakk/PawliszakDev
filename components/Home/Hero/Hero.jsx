import AvatarBlob from '../../UI/AvatarBlob';

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
				/>
				<HeroText />
			</div>
			<div className={`${classes.block} block`}></div>
		</section>
	);
};

export default Hero;
