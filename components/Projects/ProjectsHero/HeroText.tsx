import { useTranslation } from 'react-i18next';
import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import classes from './HeroText.module.scss';
const HeroText = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<div className={classes.text}>
			<SectionTitle className={classes.heading}>
				{t('projects.heading')}
			</SectionTitle>
			<p>{t('projects.text')}</p>
		</div>
	);
};

export default HeroText;
