import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import classes from './MainNavigation.module.scss';
import Link from 'next/link';
import NavList from './NavList';
import ThemeContext from '../../../store/theme-context';
import { motion } from 'framer-motion';

const MainNavigaiton = () => {
	const [isNavActive, setIsNavActive] = useState(false);
	const [isNavScrolled, setIsNavScrolled] = useState(false);
	const { isDark } = useContext(ThemeContext);
	const router = useRouter();

	const isHomePage = '/' === router.pathname;

	const navBarClasses = `${classes.header}  ${
		isNavScrolled || !isHomePage || isNavActive || !isDark
			? classes.headerScrolled
			: null
	}`;
	const mobileNavHandler = () => setIsNavActive((prevState) => !prevState);

	const handleNavScroll = () => {
		window.scrollY >= 90 ? setIsNavScrolled(true) : setIsNavScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavScroll);
	}, []);

	return (
		<header className={navBarClasses}>
			<motion.div whileTap={{ scale: 0.8 }} className={classes.logo}>
				<Link href="/">&lt;pawliszakDev/&gt;</Link>
			</motion.div>
			<NavList isNavActive={isNavActive} mobileNavHandler={mobileNavHandler} />
		</header>
	);
};

export default MainNavigaiton;
