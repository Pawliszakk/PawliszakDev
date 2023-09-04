import { useTranslation } from 'react-i18next';
import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../../UI/Answers/AnswerTemplate';
import classes from './WhyMe.module.scss';

const WhatSpecial = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<AnswerTemplate heading="Why me?">
			<div className={classes.box}>
				<AnswerHeading className={classes.h3}>
					{t('about.whyMe1Header')}
				</AnswerHeading>
				<p className={classes.content}>{t('about.whyMe1')}</p>
				<AnswerHeading>{t('about.whyMe2Header')}</AnswerHeading>
				<p className={classes.content}>{t('about.whyMe2')}</p>
				<AnswerHeading>{t('about.whyMe3Header')}</AnswerHeading>
				<p className={classes.content}>{t('about.whyMe3')}</p>
			</div>
		</AnswerTemplate>
	);
};

export default WhatSpecial;
