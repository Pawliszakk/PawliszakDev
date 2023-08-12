import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import classes from './ScrollToTop.module.css';
import { Transition } from 'react-transition-group';
import useDisplay from '@/hooks/useDisplay';

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
		<Transition in={show} timeout={0}>
			{(state) => (
				<div
					className={classes.box}
					style={{
						transition: 'opacity 0.3s ease-out',
						opacity: state === 'exited' ? 0 : 1,
					}}
					onClick={scrollUpHandler}
				>
					<FaChevronUp />
				</div>
			)}
		</Transition>
	);
};

export default ScrollToTop;
