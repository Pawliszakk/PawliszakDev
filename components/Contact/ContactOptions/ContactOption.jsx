import CopyToClipboard from 'react-copy-to-clipboard';
import classes from './ContactOption.module.css';


const ContactOption = ({ icon, href, name, mail, onClick }) => {
	if (mail) {
		return (
			<CopyToClipboard text={name}>
				<div
					title="Click to Copy"
					className={`${classes.option} ${classes.mail}`}
					onClick={onClick}
				>
					{icon}
					<p>{name}</p>
				</div>
			</CopyToClipboard>
		);
	}
	return (
		<a href={href} target="_blank" className={classes.option}>
			{icon} {name}
		</a>
	);
};

export default ContactOption;
