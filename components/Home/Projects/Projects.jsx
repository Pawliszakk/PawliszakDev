import SectionBlock from '../../UI/SectionBlock';
import SectionTitle from '../../UI/SectionTItle';
import LinkButton from '../../UI/buttons/LinkButton';
import SpecialLink from '../../UI/buttons/SpecialLink';
import ProjectDemos from './ProjectDemos';
import classes from './Projects.module.css';

const Projects = () => {
	return (
		<section className={classes.projects}>
			<SectionTitle>Latest Projects</SectionTitle>

			<div className={classes.container}>
				<ProjectDemos />
				<p>
					If you want to dig deeper into my code or see more projects make sure
					to visit my{' '}
					<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
					profile or click the <span>Projects</span> button below{' '}
				</p>
				<LinkButton href="/projects">Projects</LinkButton>
			</div>
			<SectionBlock className={classes.block} left />
			<SectionBlock left footer />
		</section>
	);
};

export default Projects;
