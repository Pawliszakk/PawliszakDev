import classes from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={`${classes.block} block`}></div>
			<nav>
				<Link href="/" className={classes.link}>
					Home
				</Link>
				<Link href="/about-me" className={classes.link}>
					About Me
				</Link>
				<Link href="/projects" className={classes.link}>
					Projects
				</Link>
				<Link href="/contact" className={classes.link}>
					Contact
				</Link>
			</nav>
			<p className={classes.paragraph}>{'<pawliszakdev/>'}</p>
		</footer>
	);
};

export default Footer;
