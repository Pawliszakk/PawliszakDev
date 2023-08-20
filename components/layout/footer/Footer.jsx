import classes from './Footer.module.css';
import Link from 'next/link';
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsFacebook,
	BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import SectionBlock from '../../UI/SectionBlock';

const Footer = () => {
	const year = new Date().getFullYear();

	const socials = [
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
	];
	const socialsIcons = socials.map((link) => (
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
			<SectionBlock left cdclassName={classes.block} />

			<div className={classes.socials}>
				{socialsIcons}
				<Link href="/contact" className={classes.social}>
					<BsFillEnvelopeAtFill />
				</Link>
			</div>
			<p className={classes.paragraph}>&lt;pawliszakDev/&gt;</p>
			<p className={classes.year}>{year}</p>
		</footer>
	);
};

export default Footer;
