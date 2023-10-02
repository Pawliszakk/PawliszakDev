import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
	id: string;
}

const Portal: React.FC<PortalProps> = ({ children, id }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);
	return mounted ? createPortal(children, document.getElementById(id)) : null;
};

export default Portal;
