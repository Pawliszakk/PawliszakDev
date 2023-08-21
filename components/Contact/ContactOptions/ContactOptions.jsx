import ContactOption from './ContactOption';
import classes from './ContactOptions.module.css';
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsFacebook,
	BsFillEnvelopeAtFill,
} from 'react-icons/bs';
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
	{
		name: 'oskar.pawliszak1@o2.pl',
		icon: <BsFillEnvelopeAtFill />,
		mail: true,
	},
];

const ContactOptions = ({ showModal }) => {
	return (
		<div className={classes.box}>
			{socials.map((social) => (
				<ContactOption
					onClick={showModal}
					mail={social.mail}
					icon={social.icon}
					name={social.name}
					href={social.href}
				/>
			))}
		</div>
	);
};

export default ContactOptions;
