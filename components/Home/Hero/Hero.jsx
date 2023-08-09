import LinkButton from '../../UI/LinkButton';
import Blob from './Blob';
import classes from './Hero.module.css';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.shadow}></div>
			<div className={classes.container}>
				<Blob />
				<div className={classes.textContainer}>
					<h1>
						Hi, I'm <span className={classes.headName}>Oskar</span>
					</h1>
					<p>
						I am
						<Typewriter
							loop={10}
							typeSpeed={100}
							delaySpeed={2000}
							cursor
							cursorStyle="|"
							words={[' Web Designer', ' Web Developer', ' Frontend Developer']}
						/>
					</p>
				</div>
				<div className={classes.links}>
					<LinkButton href="/contact">Contact</LinkButton>
					<LinkButton href="/about-me">About Me</LinkButton>
				</div>
			</div>
		</section>
	);
};

export default Hero;
