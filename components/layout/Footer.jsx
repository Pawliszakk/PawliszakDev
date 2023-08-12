import classes from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={classes.footer}>
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
		</footer>
	);
};

export default Footer;
