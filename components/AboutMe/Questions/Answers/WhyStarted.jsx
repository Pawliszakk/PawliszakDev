import AnswerHeading from '../../../UI/Answers/AnswerHeading';
import AnswerTemplate from '../../../UI/Answers/AnswerTemplate';
import classes from './WhyStarted.module.css';

const WhyStarted = () => {
	return (
		<AnswerTemplate classNameHeading={classes.heading} heading="Why i started">
			<p className={classes.content}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, saepe
				ipsam porro qui illum labore animi dolor perspiciatis dicta fugit
				inventore est commodi cupiditate eius veniam repellendus iusto excepturi
				provident dignissimos similique sint maiores! Facere libero possimus
				nemo nam dignissimos dolorem quas aliquam distinctio maiores quisquam
				adipisci, atque molestias quis?
			</p>
		</AnswerTemplate>
	);
};

export default WhyStarted;
