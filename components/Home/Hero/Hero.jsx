import LinkButton from '../../UI/LinkButton';
import Blob from './Blob';
import classes from './Hero.module.css';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
	const typeWriterWords = [
		'I am Web Designer',
		'I am Web Developer',
		'I am Frontend Developer',
	];
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
						<Typewriter
							loop={10}
							typeSpeed={100}
							cursor
							words={typeWriterWords}
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
