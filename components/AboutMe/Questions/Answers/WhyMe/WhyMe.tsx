import { useTranslation } from 'react-i18next';
import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../../UI/Answers/AnswerTemplate';
import classes from './WhyMe.module.scss';
import { BsPersonWorkspace } from 'react-icons/bs';

import { TbDeviceAnalytics } from 'react-icons/tb';
import { FaPaintBrush } from 'react-icons/fa';
const WhatSpecial = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<AnswerTemplate heading={t('about.option2')}>
			<div className={classes.box}>
				<AnswerHeading className={classes.h3}>
					{t('about.whyMe1Header')} <BsPersonWorkspace />
				</AnswerHeading>
				<p className={classes.content}>{t('about.whyMe1')} </p>
				<AnswerHeading>
					{t('about.whyMe2Header')} <FaPaintBrush />
				</AnswerHeading>
				<p className={classes.content}>{t('about.whyMe2')}</p>
				<AnswerHeading>
					{t('about.whyMe3Header')} <TbDeviceAnalytics />{' '}
				</AnswerHeading>
				<p className={classes.content}>{t('about.whyMe3')}</p>
			</div>
		</AnswerTemplate>
	);
};

export default WhatSpecial;
