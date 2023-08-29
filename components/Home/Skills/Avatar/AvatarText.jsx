import classes from './AvatarText.module.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import SpecialLink from '../../../UI/buttons/SpecialLink';
import { useTranslation } from 'react-i18next';

const AvatarText = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<p className={classes.text}>
			{t('skills.description1')}{' '}
			<SpecialLink span href="/about-me">
				{t('nav.about')}
			</SpecialLink>{' '}
			{t('skills.description2')}{' '}
			<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
			<ImQuotesLeft className={classes.quoteLeft} />
			<ImQuotesRight className={classes.quoteRight} />
		</p>
	);
};

export default AvatarText;
