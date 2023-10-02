import { useContext } from 'react';

import classes from './ThemeIcon.module.scss';
import { motion } from 'framer-motion';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import ThemeContext from '../../../store/theme-context';

const ThemeIcon = () => {
	const themeCtx = useContext(ThemeContext);
	const { isDark, changeTheme } = themeCtx;
	return (
		<motion.div
			whileTap={{ scale: 0.8 }}
			onClick={changeTheme}
			className={classes.box}
		>
			{isDark ? <BsSunFill /> : <BsMoonFill />}
		</motion.div>
	);
};

export default ThemeIcon;
