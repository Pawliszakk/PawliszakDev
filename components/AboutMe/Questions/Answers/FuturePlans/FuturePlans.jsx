import AnswerHeading from '../../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../../UI/Answers/AnswerTemplate';

import classes from './FuturePlans.module.css';

const FuturePlans = () => {
	return (
		<AnswerTemplate heading="Future Plans">
			<div className={classes.box}>
				<AnswerHeading className={classes.h3}>Mastering React.js</AnswerHeading>
				<p className={classes.content}>
					Continue to stay updated with the latest React.js features .Deepen
					your expertise in these technology to build more complex and
					interactive web applications.
				</p>
				<AnswerHeading>Stay Current with Web Standards:</AnswerHeading>
				<p className={classes.content}>
					Keep up with evolving web standards, browser capabilities, and best
					practices to ensure your projects are compliant with the latest
					technologies and recommendations.
				</p>
				<AnswerHeading>Continuous Learning</AnswerHeading>
				<p className={classes.content}>
					Frontend development is an ever-evolving field. Make continuous
					learning a part of your career plan, whether through online courses,
					workshops, conferences, or self-study.
				</p>
			</div>
		</AnswerTemplate>
	);
};

export default FuturePlans;
