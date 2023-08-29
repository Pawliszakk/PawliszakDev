import { Sling as Hamburger } from 'hamburger-react';
import classes from './NavList.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useDisplay from '@/hooks/useDisplay';
import ThemeIcon from './ThemeIcon';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LangChange from './LangChange';

const NavList = ({ isNavActive, mobileNavHandler }) => {
	const [t, i18n] = useTranslation('global');

	const isMobile = useDisplay();
	const router = useRouter();
	const linksList = [
		{ href: '/about-me', name: t('nav.about') },
		{ href: '/projects', name: t('nav.projects') },
		{ href: 'https://github.com/Pawliszakk', name: 'GitHub' },
		{ href: '/contact', name: t('nav.contact') },
	];

	const links = linksList.map((link) => (
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
				<ul className={classes.list}>{links}</ul>
			</div>
			<div className={classes.icons}>
				<div className={classes.hamburger}>
					<Hamburger toggled={isNavActive} toggle={mobileNavHandler} />
				</div>
				<LangChange />
				<ThemeIcon />
			</div>
		</nav>
	);
};

export default NavList;
