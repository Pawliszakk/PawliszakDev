import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import ProjectsList from './ProjectsList/ProjectsList';
import classes from './ProjectsSection.module.scss';

const ProjectsSection = () => {
	return (
		<section className={classes.projects} id='projects'>
			<SectionTitle>Portfolio</SectionTitle>
			<ProjectsList />
		</section>
	);
};

export default ProjectsSection;