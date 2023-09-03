import classes from './Footer.module.scss';
import Link from 'next/link';
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsFacebook,
	BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';

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
			rel="noopener"
		>
			{link.icon}
		</a>
	));
	return (
		<footer className={classes.footer}>
			<SectionBlock left cdclassName={classes.block} />

			<div className={classes.box}>
				<Link href="/" className={classes.name}>
					&lt;pawliszakDev/&gt;
				</Link>
				<div className={classes.socials}>
					{socialsIcons}
					<Link href="/contact" className={classes.social}>
						<BsFillEnvelopeAtFill />
					</Link>
				</div>
				<p className={classes.year}>{year}</p>
			</div>
		</footer>
	);
};

export default Footer;
