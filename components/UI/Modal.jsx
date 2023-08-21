import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';
import { BsClipboardCheck } from 'react-icons/bs';

const Modal = ({ children, onClose, show }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);
	const content = (
		<div onClick={onClose} className={classes.modal}>
			<BsClipboardCheck />
			<h2>{children}</h2>
		</div>
	);

	return mounted
		? createPortal(content, document.getElementById('modal'))
		: null;
};

export default Modal;
