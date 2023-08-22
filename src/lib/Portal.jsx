import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, id }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);
	return mounted ? createPortal(children, document.getElementById(id)) : null;
};

export default Portal;
