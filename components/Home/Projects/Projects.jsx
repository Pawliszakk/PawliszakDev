import { useTranslation } from 'react-i18next';
import SectionBlock from '../../UI/SectionBlock';
import SectionTitle from '../../UI/SectionTItle';
import LinkButton from '../../UI/buttons/LinkButton';
import SpecialLink from '../../UI/buttons/SpecialLink';
import ProjectDemos from './ProjectDemos';
import classes from './Projects.module.css';

const Projects = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<section className={classes.projects}>
			<SectionTitle>{t('latestprojects.title')}</SectionTitle>

			<div className={classes.container}>
				<ProjectDemos />
				<p>
					{t('latestprojects.text1')}{' '}
					<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
					{t('latestprojects.text2')} <span>{t('nav.projects')}</span>{' '}
					{t('latestprojects.button')}{' '}
				</p>
				<LinkButton href="/projects">{t('nav.projects')}</LinkButton>
			</div>
			<SectionBlock className={classes.block} left />
			<SectionBlock left footer />
		</section>
	);
};

export default Projects;
