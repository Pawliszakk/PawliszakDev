import CopyToClipboard from 'react-copy-to-clipboard';
import classes from './ContactOption.module.scss';
import { motion } from 'framer-motion';

const ContactOption = ({ icon, href, name, mail, onClick, index }) => {
	if (mail) {
		return (
			<CopyToClipboard text={name}>
				<motion.div
					title="Click to Copy"
					className={`${classes.option} ${classes.mail}`}
					onClick={onClick}
					whileTap={{ scale: 0.7 }}
					initial={{ opacity: 0, translateX: -50, translateY: -50 }}
					whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
					transition={{ delay: 2.1 }}
				>
					{icon}
					<p>{name}</p>
				</motion.div>
			</CopyToClipboard>
		);
	}
	return (
		<motion.a
			initial={{ opacity: 0, translateX: -50, translateY: -50 }}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ delay: index * 0.4 + 0.5 }}
			href={href}
			target="_blank"
			className={classes.option}
			rel="noopener"
		>
			{icon} {name}
		</motion.a>
	);
};

export default ContactOption;
