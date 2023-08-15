import AvatarBlob from '../../UI/AvatarBlob';
import LinkButton from '../../UI/buttons/LinkButton';

import classes from './Hero.module.css';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
	const typeWriterWords = [
		' Web Designer',
		' Frontend Developer',
		' Web Developer',
		' React Developer',
	];
	return (
		<section className={classes.hero}>
			<div className={classes.shadow}></div>
			<div className={classes.container}>
				<AvatarBlob
					image="/assets/avatarBlink.png"
					alt="avatar of pawliszakDev"
				/>
				<div className={classes.textContainer}>
					<h1>
						Hi, I am <span className={classes.headName}>Oskar</span>
					</h1>
					<p>
						I am
						<Typewriter
							loop={10}
							typeSpeed={100}
							cursor
							delaySpeed={2000}
							words={typeWriterWords}
						/>
					</p>
					<div className={classes.links}>
						<LinkButton href="/contact">Contact</LinkButton>
						<LinkButton href="/about-me">About Me</LinkButton>
					</div>
				</div>
			</div>
			<div className={`${classes.block} block`}></div>
		</section>
	);
};

export default Hero;
