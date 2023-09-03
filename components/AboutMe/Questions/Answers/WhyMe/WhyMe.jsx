import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../../UI/Answers/AnswerTemplate';
import classes from './WhyMe.module.scss';

const WhatSpecial = () => {
	return (
		<AnswerTemplate heading="Why me?">
			<div className={classes.box}>
				<AnswerHeading className={classes.h3}>
					Determination and self-discipline
				</AnswerHeading>
				<p className={classes.content}>
					Working as a front-end developer often requires many hours of
					concentration and problem-solving. Someone with determination and
					strong self-discipline will be able to overcome challenges and
					persevere in addressing coding and design-related issues.
				</p>
				<AnswerHeading>Creativity and innovation</AnswerHeading>
				<p className={classes.content}>
					The ability to think creatively and find innovative solutions in user
					interface design can significantly set apart a front-end developer.
					Creating unique and appealing websites demands the capacity to think
					beyond established patterns.
				</p>
				<AnswerHeading>Analytical thinking</AnswerHeading>
				<p className={classes.content}>
					Front-end developers often need to analyze existing code, solve
					performance issues, and optimize interfaces. Analytical thinking and
					the ability to break problems down into smaller, more manageable parts
					can help in effectively resolving programming challenges.
				</p>
			</div>
		</AnswerTemplate>
	);
};

export default WhatSpecial;
