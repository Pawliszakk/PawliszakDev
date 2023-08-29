import SectionBlock from '../../UI/SectionBlock';
import classes from './ProjectsExcerpt.module.css';

const ProjectsExcerpt = () => {
	return (
		<section className={classes.projects}>
			<SectionBlock className={classes.block} />
			<h1>snippet of projects in building phase...</h1>
			<SectionBlock footer left />
		</section>
	);
};

export default ProjectsExcerpt;
