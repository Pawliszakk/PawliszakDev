import { useTranslation } from 'react-i18next';
import classes from './LangChange.module.scss';
import { useState } from 'react';
const LangChange = () => {
	const [isEn, setIsEn] = useState(true);
	const [t, i18n] = useTranslation('global');
	const changeLanguageHandler = () => {
		const langToChange = isEn ? 'pl' : 'en';

		i18n.changeLanguage(langToChange);
		setIsEn((prevState) => !prevState);
	};

	return (
		<div className={classes.box} onClick={changeLanguageHandler}>
			<span>{isEn ? 'PL' : 'EN'}</span>
		</div>
	);
};

export default LangChange;
