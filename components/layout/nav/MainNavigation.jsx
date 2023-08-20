import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import NavList from './NavList';
import classes from './MainNavigation.module.css';
import { useRouter } from 'next/router';
import ThemeContext from '../../../store/theme-context';

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
			<div className={classes.logo}>
				<Link href="/">&lt;pawliszakDev/&gt;</Link>
			</div>
			<NavList isNavActive={isNavActive} mobileNavHandler={mobileNavHandler} />
		</header>
	);
};

export default MainNavigaiton;
