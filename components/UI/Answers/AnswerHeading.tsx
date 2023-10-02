import { ReactNode } from 'react';
import classes from './AnswerHeading.module.scss';

interface AnswerHeadingProps {
	children: ReactNode;
	className?: string;
}

const AnswerHeading: React.FC<AnswerHeadingProps> = ({
	children,
	className,
}) => {
	return <h3 className={`${classes.heading} ${className}`}>{children}</h3>;
};

export default AnswerHeading;
