import ContactOption from './ContactOption';
import classes from './ContactOptions.module.scss';
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsFacebook,
	BsFillEnvelopeAtFill,
} from 'react-icons/bs';

type SingleSocial = {
	name: string;
	href?: string;
	icon: JSX.Element;
	mail?: boolean;
};

const socials: SingleSocial[] = [
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

interface ContactOptionsProps {
	showModal: () => void;
}

const ContactOptions: React.FC<ContactOptionsProps> = ({ showModal }) => {
	return (
		<div className={classes.box}>
			{socials.map((social, i) => (
				<ContactOption
					key={social.name}
					onClick={showModal}
					mail={social.mail}
					icon={social.icon}
					name={social.name}
					href={social.href}
					index={i}
				/>
			))}
		</div>
	);
};

export default ContactOptions;
