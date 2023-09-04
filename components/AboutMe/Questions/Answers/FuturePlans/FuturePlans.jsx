import { useTranslation } from 'react-i18next';
import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../../UI/Answers/AnswerTemplate';

import classes from './FuturePlans.module.scss';

const FuturePlans = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<AnswerTemplate heading="Future Plans">
			<div className={classes.box}>
				<AnswerHeading className={classes.h3}>
					{t('about.future1Header')}
				</AnswerHeading>
				<p className={classes.content}>{t('about.future1')}</p>
				<AnswerHeading>{t('about.future2Header')}</AnswerHeading>
				<p className={classes.content}>{t('about.future2')}</p>
				<AnswerHeading>{t('about.future3Header')}</AnswerHeading>
				<p className={classes.content}>{t('about.future3')}</p>
			</div>
		</AnswerTemplate>
	);
};

export default FuturePlans;
