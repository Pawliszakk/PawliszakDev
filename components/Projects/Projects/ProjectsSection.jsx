import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import ProjectsList from './ProjectsList';
import classes from './ProjectsSection.module.scss';

const ProjectsSection = () => {
	return (
		<section className={classes.projects} id="projects">
			<SectionTitle>Portfolio</SectionTitle>
			<ProjectsList />
			<SectionBlock className={classes.block} />
		</section>
	);
};

export default ProjectsSection;
