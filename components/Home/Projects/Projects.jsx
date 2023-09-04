import { useTranslation } from 'react-i18next';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import LinkButton from '../../UI/buttons/LinkButton';
import SpecialLink from '../../UI/buttons/SpecialLink';
import ProjectDemos from './ProjectDemos';
import classes from './Projects.module.scss';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

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
			<FaLaptopCode className={`${classes.icon} ${classes.iconFirst}`} />
			<FaCode className={`${classes.icon} ${classes.iconSecond}`} />
			<SectionBlock className={classes.block} left />
			<SectionBlock className={classes.blockBottom} />
		</section>
	);
};

export default Projects;
