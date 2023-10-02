import { useState, useEffect } from 'react';

const useDisplay = () => {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	const screenXHandler = () => {
		window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
	};

	useEffect(() => {
		window.addEventListener('resize', screenXHandler);
		screenXHandler();
		return () => {
			window.removeEventListener('resize', screenXHandler);
		};
	}, []);
	return isMobile;
};

export default useDisplay;
