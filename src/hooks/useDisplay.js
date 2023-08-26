import { useState, useEffect } from 'react';

const useDisplay = () => {
	const [isMobile, setIsMobile] = useState(null);

	const screenXHandler = () => {
		window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
	};

	useEffect(() => {
		window.addEventListener('resize', screenXHandler);
		screenXHandler();
	}, []);
	return isMobile;
};

export default useDisplay;
