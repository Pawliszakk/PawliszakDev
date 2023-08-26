import { useEffect, useState } from 'react';
import { BsClipboardCheck } from 'react-icons/bs';
import classes from './Contact.module.css';
import ContactOptions from './ContactOptions/ContactOptions';
import AvatarBlob from '../UI/AvatarBlob';
import SectionBlock from '../UI/SectionBlock';
import { motion } from 'framer-motion';
import Modal from '../UI/PortalComponents/Modal';
import SlideAnimation from '../UI/SlideAnimation';

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

			<SlideAnimation delay={0.3}>
				<AvatarBlob
					className={classes.blob}
					alt="Blinking avatar picture of pawliszakDev"
					image="/assets/avatar/avatarBlink.png"
				/>
			</SlideAnimation>

			<motion.h1
				initial={{ opacity: 0, translateX: 50 }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{ delay: 0.3 }}
			>
				Get in touch with me!
			</motion.h1>
			<ContactOptions showModal={showModalHandler} />

			{isModal && (
				<Modal
					show={isModal}
					onClose={hideModalHandler}
					icon={<BsClipboardCheck />}
				>
					Copied to clipboard!
				</Modal>
			)}
			<SectionBlock left footer />
		</section>
	);
};

export default Contact;
