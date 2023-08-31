import classes from './Questions.module.css';

import { useState } from 'react';
import Skills from './Answers/Skills';
import WhyStarted from './Answers/WhyStarted';
import WhyKept from './Answers/WhyKept';
import FuturePlans from './Answers/FuturePlans';

import SectionBlock from '../../UI/SectionBlock';
import Options from './Options';

const Questions = () => {
	const [content, setContent] = useState(0);

	const answersComponents = [
		{ component: <Skills />, id: 'skills' },
		{ component: <WhyStarted />, id: 'whyStarted' },
		{ component: <WhyKept />, id: 'whyKept' },
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
				<div className={classes.content}>{currentAnswer}</div>
			</div>

			<SectionBlock left className={classes.blockBottom} />
		</section>
	);
};

export default Questions;
