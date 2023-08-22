import SectionBlock from '../../UI/SectionBlock';
import SectionTitle from '../../UI/SectionTItle';
import LinkButton from '../../UI/buttons/LinkButton';
import ProjectDemos from './ProjectDemos';
import classes from './Projects.module.css';

const Projects = () => {
	return (
		<section className={classes.projects}>
			<SectionTitle>Latest Projects</SectionTitle>

			<ProjectDemos />

			<LinkButton href="/projects">Projects</LinkButton>
			<SectionBlock left footer />
		</section>
	);
};

export default Projects;
