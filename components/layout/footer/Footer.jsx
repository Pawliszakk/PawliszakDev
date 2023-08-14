import { useRouter } from 'next/router';
import classes from './Footer.module.css';

const Footer = () => {
	const router = useRouter();

	const links = [
		{ href: '/', name: 'Home' },
		{ href: '/about-me', name: 'About Me' },
		{ href: '/projects', name: 'Projects' },
		{ href: '/contact', name: 'Contact' },
	];

	const navButtons = links.map((link) => (
		<button
			key={link.name}
			className={classes.btn}
			onClick={() => router.push(link.href)}
		>
			{link.name}
		</button>
	));

	return (
		<footer className={classes.footer}>
			<div className={`${classes.block} block`}></div>
			<nav>{navButtons}</nav>
			<p className={classes.paragraph}>{'<pawliszakdev/>'}</p>
		</footer>
	);
};

export default Footer;
