import { useState } from 'react';
import classes from './ThemeIcon.module.css';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeIcon = () => {
	const [isDark, setIsDark] = useState(false);
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
			{isDark ? <BsSunFill /> : <BsMoonFill />}
		</div>
	);
};

export default ThemeIcon;
