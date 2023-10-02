import { ReactNode } from 'react';
import classes from './SectionHero.module.scss';

interface SectionHeroProps {
	children: ReactNode;
	classNameHero?: string;
	classNameShadow?: string;
}

const SectionHero: React.FC<SectionHeroProps> = ({
	children,
	classNameHero,
	classNameShadow,
}) => {
	return (
		<section className={`${classes.hero} ${classNameHero}`}>
			<div className={`${classes.shadow} ${classNameShadow}`}></div>
			{children}
		</section>
	);
};

export default SectionHero;
