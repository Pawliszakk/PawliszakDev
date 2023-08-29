import SectionTitle from '../../UI/SectionTItle';
import classes from './Roadmap.module.css';

const Roadmap = () => {
	return (
		<section className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>
			<div className={classes.container}></div>
		</section>
	);
};

export default Roadmap;
