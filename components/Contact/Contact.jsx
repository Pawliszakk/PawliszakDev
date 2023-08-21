import { useState } from 'react';

import Modal from '../UI/Modal';
import classes from './Contact.module.css';

const Contact = () => {
	const [isModal, setIsModal] = useState(true);

	const hideModalHandler = () => setIsModal(false);
	const showModalHandler = () => setIsModal(true);
	return (
		<section className={classes.contact}>
			<h1>Strona kontakt jest w trakcie budowy...</h1>

			<button onClick={showModalHandler}>pokaz modal</button>
			<button onClick={hideModalHandler}>schowaj modal</button>

			{isModal ? (
				<Modal show={isModal} onClose={hideModalHandler}>
					Copied to clipboard!
				</Modal>
			) : null}
		</section>
	);
};

export default Contact;
