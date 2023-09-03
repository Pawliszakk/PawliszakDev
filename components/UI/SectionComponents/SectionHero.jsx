import classes from './SectionHero.module.scss';
const SectionHero = ({ children, classNameHero, classNameShadow }) => {
	return (
		<section className={`${classes.hero} ${classNameHero}`}>
			<div className={`${classes.shadow} ${classNameShadow}`}></div>
			{children}
		</section>
	);
};

export default SectionHero;
