import { ReactNode } from 'react';
import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
	children: ReactNode;
	className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
	return (
		<h2 className={`${classes.heading} ${className}`}>&lt;{children}/&gt;</h2>
	);
};

export default SectionTitle;
