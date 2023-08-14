import { useState } from 'react';
import classes from './ThemeIcon.module.css';
import { BsSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

const ThemeIcon = () => {
	const [isDark, setIsDark] = useState(true);
	const handleThemeChange = () => {
		const body = document.querySelector('body');
		if (isDark) {
			body.setAttribute('data-theme', 'light');
			setIsDark(false);
		} else {
			body.setAttribute('data-theme', 'dark');
			setIsDark(true);
		}
	};

	return (
		<div className={classes.box} onClick={handleThemeChange}>
			{isDark ? <BsSunFill /> : <MdDarkMode />}
		</div>
	);
};

export default ThemeIcon;
