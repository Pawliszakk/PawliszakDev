import { Sling as Hamburger } from 'hamburger-react';
import classes from './NavList.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useDisplay from '@/hooks/useDisplay';
import ThemeIcon from './ThemeIcon';
import { motion } from 'framer-motion';

const NavList = ({ isNavActive, mobileNavHandler }) => {
	const isMobile = useDisplay();
	const router = useRouter();
	const links = [
		{ href: '/about-me', name: 'About Me' },
		{ href: '/projects', name: 'Projects' },
		{ href: 'https://github.com/Pawliszakk', name: 'GitHub' },
		{ href: '/contact', name: 'Contact' },
	];

	const linkis = links.map((link) => (
		<motion.li
			whileTap={{ scale: 0.8 }}
			key={link.name}
			onClick={isMobile ? mobileNavHandler : () => {}}
			className={link.href === router.pathname ? classes.activeLink : null}
		>
			{link.name === 'GitHub' ? (
				<a href={link.href} target="_blank">
					{link.name}
				</a>
			) : (
				<Link href={link.href}>{link.name}</Link>
			)}
		</motion.li>
	));
	return (
		<nav className={classes.nav}>
			<div
				className={`${classes.navigation} ${
					isNavActive ? classes.active : null
				}`}
			>
				<ul className={classes.list}>{linkis}</ul>
			</div>
			<div className={classes.icons}>
				<div className={classes.hamburger}>
					<Hamburger toggled={isNavActive} toggle={mobileNavHandler} />
				</div>
				<ThemeIcon />
			</div>
		</nav>
	);
};

export default NavList;
