import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../../UI/Answers/AnswerTemplate';
import classes from './WhatSpecial.module.css';

const WhatSpecial = () => {
	return (
		<AnswerTemplate heading="What makes me stand out?">
			<AnswerHeading>Nagłówek 1</AnswerHeading>
			<p className={classes.content}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic
				mollitia aut iure cum distinctio repellendus, nisi libero modi eius
				porro sit qui iusto dolor saepe temporibus iste officiis eligendi?
			</p>
			<AnswerHeading>Nagłówek 1</AnswerHeading>
			<p className={classes.content}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic
				mollitia aut iure cum distinctio repellendus, nisi libero modi eius
				porro sit qui iusto dolor saepe temporibus iste officiis eligendi?
			</p>
			<AnswerHeading>Nagłówek 1</AnswerHeading>
			<p className={classes.content}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic
				mollitia aut iure cum distinctio repellendus, nisi libero modi eius
				porro sit qui iusto dolor saepe temporibus iste officiis eligendi?
			</p>
		</AnswerTemplate>
	);
};

export default WhatSpecial;
