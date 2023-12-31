import classes from './ProjectCard.module.scss';
import Image from 'next/image';

import LinkButton from '../buttons/LinkButton';
import SlideFromTop from '../Animations/SlideFromTop';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
	href: string;
	src: string;
	alt: string;
	title: string;
	tech: string[];
	github: string;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	href,
	src,
	alt,
	title,
	tech,
	github,
	index,
}) => {
	const [t, i18n] = useTranslation('global');
	const techMap = tech.map((tech) => <li key={tech}>{tech}</li>);

	return (
		<SlideFromTop className={classes.box} index={index}>
			<div className={classes.card}>
				<div className={classes.image}>
					<Image src={src} alt={alt} fill sizes="100%" />
				</div>
				<div className={classes.text}>
					<div>
						<h3>{title}</h3>
						<p>{t('latestprojects.technologies')}</p>
						<ul>{techMap}</ul>
					</div>
					<div className={classes.buttons}>
						<LinkButton anchor href={github}>
							{t('latestprojects.link1')}
						</LinkButton>
						<LinkButton anchor href={href}>
							{t('latestprojects.link2')}
						</LinkButton>
					</div>
				</div>
			</div>
		</SlideFromTop>
	);
};

export default ProjectCard;
