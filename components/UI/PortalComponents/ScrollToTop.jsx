import { useEffect, useState } from 'react';

import classes from './ScrollToTop.module.css';

import useDisplay from '@/hooks/useDisplay';
import { IoMdArrowRoundUp } from 'react-icons/io';
import Portal from '@/lib/Portal';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const isMobile = useDisplay();
	const show = isScrolled && isMobile;
	const handleScroll = () => {
		window.scrollY >= 650 ? setIsScrolled(true) : setIsScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);
	const scrollUpHandler = () => {
		window.scrollTo(0, 0);
	};

	return (
		<AnimatePresence>
			{show && (
				<Portal id='overlay-root'>
					<motion.div
						className={classes.box}
						onClick={scrollUpHandler}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<IoMdArrowRoundUp />
					</motion.div>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
