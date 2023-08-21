import { useEffect, useState } from 'react';

import Modal from '../UI/Modal';
import classes from './Contact.module.css';

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
			<h1>Strona kontakt jest w trakcie budowy...</h1>

			<button onClick={showModalHandler}>SHOW MODAL</button>
			<button onClick={hideModalHandler}>CLOSE MODAL</button>

			<Modal show={isModal} onClose={hideModalHandler}>
				Copied to clipboard!
			</Modal>
		</section>
	);
};

export default Contact;
