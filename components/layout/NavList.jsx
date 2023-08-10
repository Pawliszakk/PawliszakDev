import { useEffect, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import classes from './NavList.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
const NavList = ({ isNavActive, mobileNavHandler }) => {
	const [isMobile, setIsMobile] = useState(null);
	const router = useRouter();
	const links = [
		{ href: '/', name: 'Home' },
		{ href: '/about-me', name: 'About Me' },
		{ href: '/projects', name: 'Projects' },
		{ href: '/contact', name: 'Contact' },
	];
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
	}, [screenXHandler]);

	const linkis = links.map((link) => (
		<li
			key={link.name}
			onClick={isMobile ? mobileNavHandler : () => {}}
			className={link.href === router.pathname ? classes.activeLink : null}
		>
			<Link href={link.href}>{link.name}</Link>
		</li>
	));
	return (
		<nav>
			<div className={classes.hamburger}>
				<Hamburger toggled={isNavActive} toggle={mobileNavHandler} />
			</div>
			<div
				className={`${classes.navigation} ${
					isNavActive ? classes.active : null
				}`}
			>
				<ul className={classes.list}>{linkis}</ul>
			</div>
		</nav>
	);
};

export default NavList;
