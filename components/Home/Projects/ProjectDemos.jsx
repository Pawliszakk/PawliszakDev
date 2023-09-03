import classes from './ProjectDemos.module.scss';
import ProjectDemo from './ProjectDemo';
import { useTranslation } from 'react-i18next';
const ProjectDemos = () => {
	const [t, i18n] = useTranslation('global');
	const projects = [
		{
			href: 'https://klimaswiat.pl/',
			src: '/assets/projects/klimaswiat.JPG',
			alt: 'Klima Świat Home page snippet',
			detail: '/projects/klima-swiat',
			title: t('latestprojects.titleklima'),
			tech: ['Next.js', 'CSS Modules', 'Framer Motion', 'Next Export'],
		},
		{
			src: '/assets/projects/pawliszakdev.JPG',
			alt: 'PawliszakDev home page snippet',
			href: 'https://www.pawliszakdev.com/',
			detail: '/projects/pawliszakdev',
			title: t('latestprojects.titledev'),
			tech: ['React.js', 'Next.js', 'CSS Modules', 'Framer Motion', 'i18next'],
		},
		{
			src: '/assets/projects/ecofresh.JPG',
			alt: 'Eco fresh Home page snippet',
			href: 'https://www.hurtowniaecofresh.pl/',
			detail: '/projects/eco-fresh',
			title: t('latestprojects.titleecofresh'),
			tech: ['Next.js', 'CSS Modules', 'Framer Motion', 'Next Export'],
		},
	];

	return (
		<div className={classes.box}>
			{projects.map((project, i) => (
				<ProjectDemo
					key={project.alt}
					href={project.href}
					src={project.src}
					alt={project.alt}
					title={project.title}
					tech={project.tech}
					detail={project.detail}
					index={i}
				/>
			))}
		</div>
	);
};

export default ProjectDemos;
