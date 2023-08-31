import classes from './Questions.module.css';
import SectionTitle from '../../UI/SectionTItle';
import { useState } from 'react';
import Skills from './Answers/Skills';
import WhyStarted from './Answers/WhyStarted';
import WhyKept from './Answers/WhyKept';
import FuturePlans from './Answers/FuturePlans';

const Questions = () => {
	const [content, setContent] = useState(1);

	const answersComponents = [
		<Skills />,
		<WhyStarted />,
		<WhyKept />,
		<FuturePlans />,
	];

	return (
		<section className={classes.questions}>
			<SectionTitle>More About Me</SectionTitle>

			<div className={classes.box}>
				<ul className={classes.options}>
					<li onClick={() => setContent(0)}>Skills</li>
					<li onClick={() => setContent(1)}>Why started</li>
					<li onClick={() => setContent(2)}>Why kept going</li>
					<li onClick={() => setContent(3)}>Willing to do</li>
				</ul>
				<p>{answersComponents[content]}</p>
			</div>
		</section>
	);
};

export default Questions;
