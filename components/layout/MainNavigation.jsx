import { useState } from 'react';
import Link from 'next/link';
import classes from './MainNavigation.module.css';
import { Sling as Hamburger } from 'hamburger-react';

const MainNavigaiton = () => {
	const [isNavActive, setIsNavActive] = useState(true);
	const mobileNavHandler = () => setIsNavActive((prevState) => !prevState);
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">{'<pawliszakDev/>'}</Link>
			</div>
			<nav>
				<div className={classes.hamburger}>
					<Hamburger toggled={isNavActive} toggle={mobileNavHandler} />
				</div>
				<div
					className={`${classes.navigation} ${
						isNavActive ? classes.active : null
					}`}
				>
					<ul className={classes.list}>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about-me">About Me</Link>
						</li>
						<li>
							<Link href="/projects">Projects</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default MainNavigaiton;
