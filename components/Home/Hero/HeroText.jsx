import { Typewriter } from 'react-simple-typewriter';
import LinkButton from '../../UI/buttons/LinkButton';
import classes from './HeroText.module.css';
const HeroText = () => {
	const typeWriterWords = [
		' Responsive Design',
		' Search Engine Optimization',
		' Clean Design',
		' User Friendly Interface',
	];
	return (
		<div className={classes.box}>
			<h1>
				Hi, I'm Oskar,
				<br />
				<span className={classes.heroSpan}>React Developer</span>
			</h1>
			<p>
				Skilled in
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
	);
};

export default HeroText;
