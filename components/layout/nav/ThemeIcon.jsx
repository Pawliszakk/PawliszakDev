import { useContext } from 'react';
import classes from './ThemeIcon.module.css';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import ThemeContext from '../../../store/theme-context';

const ThemeIcon = () => {
	const themeCtx = useContext(ThemeContext);
	const { isDark, changeTheme } = themeCtx;
	return (
		<div onClick={changeTheme} className={classes.box}>
			{isDark ? <BsSunFill /> : <BsMoonFill />}
		</div>
	);
};

export default ThemeIcon;
