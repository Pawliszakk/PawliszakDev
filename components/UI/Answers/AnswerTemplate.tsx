import { ReactNode } from 'react';
import ShowAnimation from '../Animations/ShowAnimation';
import classes from './AnswerTemplate.module.scss';

interface AnswerTemplateProps {
	children: ReactNode;
	heading: string;
	classNameHeading?: string;
}

const AnswerTemplate: React.FC<AnswerTemplateProps> = ({
	children,
	heading,
	classNameHeading,
}) => {
	return (
		<ShowAnimation className={classes.box}>
			<h2 className={`${classes.heading} ${classNameHeading}`}>{heading}</h2>
			{children}
		</ShowAnimation>
	);
};

export default AnswerTemplate;
