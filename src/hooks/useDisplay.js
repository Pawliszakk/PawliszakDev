import { useState, useEffect } from 'react';

const useDisplay = () => {
	const [isMobile, setIsMobile] = useState(null);

	const screenXHandler = () => {
		if (window.innerWidth > 768) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	};
	useEffect(() => {
		window.addEventListener('resize', screenXHandler);
		screenXHandler();
	}, []);
	return isMobile;
};

export default useDisplay;
