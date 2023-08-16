import classes from './Footer.module.css';
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsFacebook,
	BsFillEnvelopeAtFill,
} from 'react-icons/bs';

const Footer = () => {
	const links = [
		{
			name: 'Github',
			href: 'https://github.com/Pawliszakk',
			icon: <BsGithub />,
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/pawliszakk/?next=%2F',
			icon: <BsInstagram />,
		},
		{
			name: 'Linkedin',
			href: 'https://www.linkedin.com/in/oskarpawliszak/',
			icon: <BsLinkedin />,
		},
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/oskar.pawliszak.5/',
			icon: <BsFacebook />,
		},
		{
			name: 'Email',
			href: '',
			icon: <BsFillEnvelopeAtFill />,
		},
	];
	const linksIcons = links.map((link) => (
		<a
			key={link.name}
			href={link.href}
			target="_blank"
			className={classes.social}
		>
			{link.icon}
		</a>
	));
	return (
		<footer className={classes.footer}>
			<div className={`${classes.block} block`}></div>

			<div className={classes.socials}>{linksIcons}</div>
			<p className={classes.paragraph}>{'<pawliszakdev/>'}</p>
		</footer>
	);
};

export default Footer;
