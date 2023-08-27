import classes from './ProjectDemos.module.css';
import ProjectDemo from './ProjectDemo';
const ProjectDemos = () => {
	const projects = [
		{
			href: 'https://klimaswiat.pl/',
			src: '/assets/projects/klimaswiat.JPG',
			alt: 'Klima Świat Home page snippet',
			title: 'Klima Świat Website',
			tech: ['HTML5', 'CSS Modules', 'React.js', 'Next.js', 'Framer Motion'],
		},
		{
			src: '/assets/projects/ecofresh.JPG',
			alt: 'Eco fresh Home page snippet',
			href: 'https://www.hurtowniaecofresh.pl/',
			title: 'Hurtownia Eco Fresh Website',
			tech: ['React.js', 'Next.js', 'HTML5', 'CSS Modules', 'Framer Motion'],
		},
	];

	return (
		<div className={classes.box}>
			{projects.map((project) => (
				<ProjectDemo
					key={project.alt}
					href={project.href}
					src={project.src}
					alt={project.alt}
					title={project.title}
					tech={project.tech}
				/>
			))}
		</div>
	);
};

export default ProjectDemos;
