import classes from './Questions.module.css';

import { useState } from 'react';
import Skills from './Answers/Skills/Skills';

import FuturePlans from './Answers/FuturePlans/FuturePlans';

import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import Options from './Options';
import WhatSpecial from './Answers/WhatSpecial/WhyMe';

const Questions = () => {
	const [content, setContent] = useState(0);

	const answersComponents = [
		{ component: <Skills />, id: 'skills' },
		{ component: <WhatSpecial />, id: 'WhatSpecial' },
		{ component: <FuturePlans />, id: 'futurePlans' },
	];
	const currentAnswer = answersComponents[content].component;
	const contentHandler = (number) => setContent(number);

	return (
		<section className={classes.questions}>
			<SectionBlock left className={classes.blockTop}></SectionBlock>
			<div className={classes.shadow}></div>

			<div className={classes.box}>
				<Options option={content} key={1} onContentChange={contentHandler} />
				{currentAnswer}
			</div>

			<SectionBlock left className={classes.blockBottom} />
		</section>
	);
};

export default Questions;
