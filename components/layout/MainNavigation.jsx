import { useState } from 'react';
import Link from 'next/link';
import NavList from './NavList';
import classes from './MainNavigation.module.css';

const MainNavigaiton = () => {
	const [isNavActive, setIsNavActive] = useState(true);
	const mobileNavHandler = () => setIsNavActive((prevState) => !prevState);
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">{'<pawliszakDev/>'}</Link>
			</div>
			<NavList isNavActive={isNavActive} mobileNavHandler={mobileNavHandler} />
		</header>
	);
};

export default MainNavigaiton;
