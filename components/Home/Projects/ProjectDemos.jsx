import classes from './ProjectDemos.module.css';
import ProjectDemo from './ProjectDemo';
const ProjectDemos = () => {
	const projects = [
		{
			href: 'https://klimaswiat.pl/',
			src: '/assets/projects/klimaswiat.JPG',
			alt: 'Klima Świat Home page snippet',
		},
		{
			src: '/assets/projects/ecofresh.JPG',
			alt: 'Eco fresh Home page snippet',
			href: 'https://www.hurtowniaecofresh.pl/',
		},
	];

	return (
		<div className={classes.box}>
			{projects.map((project) => (
				<ProjectDemo href={project.href} src={project.src} alt={project.alt} />
			))}
		</div>
	);
};

export default ProjectDemos;
