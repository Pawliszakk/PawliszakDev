import classes from './ProjectDemos.module.scss';
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import { useTranslation } from 'react-i18next';
import { Project } from '../../../src/types/app';

const ProjectDemos = () => {
	const [t, i18n] = useTranslation('global');
	const projects: Project[] = [
		{
			href: 'https://klimaswiat.pl/',
			src: '/assets/projects/klimaswiat.JPG',
			alt: 'Klima Świat Home page snippet',
			github: 'https://github.com/Pawliszakk/KlimaSwiatNext',
			title: t('latestprojects.titleklima'),
			tech: ['Next.js', 'CSS Modules', 'Framer Motion', 'Next Export'],
		},
		{
			src: '/assets/projects/pawliszakdev.JPG',
			alt: 'PawliszakDev home page snippet',
			href: 'https://www.pawliszakdev.com/',
			github: 'https://github.com/Pawliszakk/PawliszakDev',
			title: t('latestprojects.titledev'),
			tech: [
				'Next.js',
				'Typescript',
				'CSS Modules',
				'SCSS',
				'Framer Motion',
				'i18next',
			],
		},
		{
			src: '/assets/projects/ecofresh.JPG',
			alt: 'Eco fresh Home page snippet',
			href: 'https://www.hurtowniaecofresh.pl/',
			github: 'https://github.com/Pawliszakk/EcoFreshNext',
			title: t('latestprojects.titleecofresh'),
			tech: [
				'Next.js',
				'Typescript',
				'CSS Modules',
				'Framer Motion',
				'Next Export',
			],
		},
	];

	return (
		<div className={classes.box}>
			{projects.map((project, i) => (
				<ProjectCard
					key={project.alt}
					href={project.href}
					src={project.src}
					alt={project.alt}
					title={project.title}
					tech={project.tech}
					github={project.github}
					index={i}
				/>
			))}
		</div>
	);
};

export default ProjectDemos;
