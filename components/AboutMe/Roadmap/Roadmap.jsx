import SectionTitle from '../../UI/SectionTItle';
import classes from './Roadmap.module.css';

const Roadmap = () => {
	return (
		<section id="roadmap" className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>
			<div className={classes.container}></div>
		</section>
	);
};

export default Roadmap;
