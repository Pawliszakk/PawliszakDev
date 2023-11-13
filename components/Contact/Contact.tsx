import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

import { BsClipboardCheck } from 'react-icons/bs';
import classes from './Contact.module.scss';
import ContactOptions from './ContactOptions/ContactOptions';
import AvatarBlob from '../UI/AvatarBlob';
import SectionBlock from '../UI/SectionComponents/SectionBlock';
import Modal from '../UI/PortalComponents/Modal';
import SlideAnimation from '../UI/Animations/SlideAnimation';
import SectionHero from '../UI/SectionComponents/SectionHero';

const Contact = () => {
	const [isModal, setIsModal] = useState(false);
	const [t, i18n] = useTranslation('global');
	const hideModalHandler = () => setIsModal(false);
	const showModalHandler = () => setIsModal(true);

	useEffect(() => {
		const modalTimer = setTimeout(() => setIsModal(false), 3000);
		return () => clearInterval(modalTimer);
	}, [isModal]);

	return (
		<SectionHero
			classNameHero={classes.contact}
			classNameShadow={classes.shadow}
		>
			<SlideAnimation delay={0.3}>
				<AvatarBlob
					className={classes.blob}
					alt="Blinking avatar picture of pawliszakDev"
					image="/assets/avatar/avatarBlink.png"
				/>
			</SlideAnimation>

			<motion.h1
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3 }}
			>
				{t('contact.heading')}
			</motion.h1>

			<ContactOptions showModal={showModalHandler} />

			<AnimatePresence>
				{isModal && (
					<Modal
						show={isModal}
						onClose={hideModalHandler}
						icon={<BsClipboardCheck />}
					>
						Copied to clipboard!
					</Modal>
				)}
			</AnimatePresence>

			<SectionBlock left footer />
		</SectionHero>
	);
};

export default Contact;
