import CopyToClipboard from 'react-copy-to-clipboard';
import classes from './ContactOption.module.css';
import { motion } from 'framer-motion';

const ContactOption = ({ icon, href, name, mail, onClick }) => {
	if (mail) {
		return (
			<CopyToClipboard text={name}>
				<motion.div
					title="Click to Copy"
					className={`${classes.option} ${classes.mail}`}
					onClick={onClick}
					whileTap={{ scale: 0.7 }}
				>
					{icon}
					<p>{name}</p>
				</motion.div>
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
