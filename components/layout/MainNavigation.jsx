import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavList from './NavList';
import classes from './MainNavigation.module.css';
import { useRouter } from 'next/router';

const MainNavigaiton = () => {
	const [isNavActive, setIsNavActive] = useState(true);
	const [isNavScrolled, setIsNavScrolled] = useState(false);

	const router = useRouter();

	const isHomePage = '/' === router.pathname;
	const navBarClasses = `${classes.header}  ${
		isNavScrolled || !isHomePage || isNavActive ? classes.headerScrolled : null
	}`;
	const mobileNavHandler = () => setIsNavActive((prevState) => !prevState);

	const handleNavScroll = () => {
		window.scrollY >= 90 ? setIsNavScrolled(true) : setIsNavScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavScroll);
	}, [handleNavScroll]);

	return (
		<header className={navBarClasses}>
			<div className={classes.logo}>
				<Link href="/">{'<pawliszakDev/>'}</Link>
			</div>
			<NavList isNavActive={isNavActive} mobileNavHandler={mobileNavHandler} />
		</header>
	);
};

export default MainNavigaiton;
