import LinkButton from '../../UI/LinkButton';
import Blob from './Blob';
import classes from './Hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.shadow}></div>
			<div className={classes.container}>
				<Blob />
				<div className={classes.textContainer}>
					<h1>Hi, im Oskar</h1>
					<p>Im frontend Developer</p>
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
