// import { useRouter } from 'next/router';
import classes from './Footer.module.css';
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsFacebook,
	BsFillEnvelopeAtFill,
} from 'react-icons/bs';

const Footer = () => {
	// const router = useRouter();

	// const links = [
	// 	{ href: '/', name: 'Home' },
	// 	{ href: '/about-me', name: 'About Me' },
	// 	{ href: '/projects', name: 'Projects' },
	// 	{ href: '/contact', name: 'Contact' },
	// ];

	// const navButtons = links.map((link) => (
	// 	<button
	// 		key={link.name}
	// 		className={classes.btn}
	// 		onClick={() => router.push(link.href)}
	// 	>
	// 		{link.name}
	// 	</button>
	// ));

	return (
		<footer className={classes.footer}>
			<div className={`${classes.block} block`}></div>
			{/* <nav>{navButtons}</nav> */}
			<div className={classes.socials}>
				<a href="www.youtube.com" target="_blank" className={classes.social}>
					<BsGithub />
				</a>
				<a href="www.youtube.com" target="_blank" className={classes.social}>
					<BsInstagram />
				</a>
				<a href="www.youtube.com" target="_blank" className={classes.social}>
					<BsLinkedin />
				</a>
				<a href="www.youtube.com" target="_blank" className={classes.social}>
					<BsFacebook />
				</a>
				<a href="www.youtube.com" target="_blank" className={classes.social}>
					<BsFillEnvelopeAtFill />
				</a>
			</div>
			<p className={classes.paragraph}>{'<pawliszakdev/>'}</p>
		</footer>
	);
};

export default Footer;
