import Portal from '@/lib/Portal';
import classes from './LoadingSpinner.module.scss';
import { useTranslation } from 'react-i18next';

const LoadingSpinner = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<Portal id="overlay-root">
			<div className={classes.backdrop}>
				<div className={classes.spinner}></div>
				<p>{t('loading')}</p>
			</div>
		</Portal>
	);
};

export default LoadingSpinner;
