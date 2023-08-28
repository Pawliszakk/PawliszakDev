import classes from './ProjectDemos.module.css';
import ProjectDemo from './ProjectDemo';
const ProjectDemos = () => {
	const projects = [
		{
			href: 'https://klimaswiat.pl/',
			src: '/assets/projects/klimaswiat.JPG',
			alt: 'Klima Świat Home page snippet',
			detail: '/projects/klima-swiat',
			title: 'Klima Świat Website',
			tech: ['HTML5', 'CSS Modules', 'React.js', 'Next.js', 'Framer Motion'],
		},
		{
			src: '/assets/projects/pawliszakdev.JPG',
			alt: 'PawliszakDev home page snippet',
			href: 'https://www.pawliszakdev.com/',
			detail: '/projects/pawliszakdev',
			title: 'My Personal Portfolio Website',
			tech: ['React.js', 'Next.js', 'HTML5', 'CSS Modules', 'Framer Motion'],
		},
		{
			src: '/assets/projects/ecofresh.JPG',
			alt: 'Eco fresh Home page snippet',
			href: 'https://www.hurtowniaecofresh.pl/',
			detail: '/projects/eco-fresh',
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
					detail={project.detail}
				/>
			))}
		</div>
	);
};

export default ProjectDemos;
