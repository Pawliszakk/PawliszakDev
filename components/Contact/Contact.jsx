import { useEffect, useState } from 'react';

import Modal from '../UI/Modal';
import classes from './Contact.module.css';
import ContactOptions from './ContactOptions/ContactOptions';
import AvatarBlob from '../UI/AvatarBlob';
import SectionBlock from '../UI/SectionBlock';

const Contact = () => {
	const [isModal, setIsModal] = useState(false);

	const hideModalHandler = () => setIsModal(false);
	const showModalHandler = () => setIsModal(true);
	useEffect(() => {
		const modalTimer = setTimeout(() => setIsModal(false), 3000);
		return () => clearInterval(modalTimer);
	}, [isModal]);

	return (
		<section className={classes.contact}>
			<div className={classes.shadow}></div>
			<AvatarBlob
				className={classes.blob}
				alt="Blinking avatar picture of pawliszakDev"
				image="/assets/avatar/avatarBlink.png"
			/>
			<h1>Get in touch with me!</h1>
			<ContactOptions showModal={showModalHandler} />
			<Modal show={isModal} onClose={hideModalHandler}>
				Copied to clipboard!
			</Modal>
			<SectionBlock left className={classes.block} />
		</section>
	);
};

export default Contact;
