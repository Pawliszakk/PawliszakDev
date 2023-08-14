import { createContext, useState } from 'react';

const ThemeContext = createContext({
	isDark: true,
	changeTheme: () => {},
});
export default ThemeContext;

export function ThemeContextProvider({ children }) {
	const [isDark, setIsDark] = useState(true);

	const changeThemeHandler = () => {
		const body = document.querySelector('body');
		if (isDark) {
			body.setAttribute('data-theme', 'light');
			setIsDark(false);
		} else {
			body.setAttribute('data-theme', 'dark');
			setIsDark(true);
		}
	};
	const context = {
		changeTheme: changeThemeHandler,
		isDark,
	};
	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	);
}
