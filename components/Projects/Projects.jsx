import { useTranslation } from 'react-i18next';
import ContactComponent from '../ContactComponent/ContactComponent';
import ProjectsSection from './Projects/ProjectsSection';
import ProjectsHero from './ProjectsHero/ProjectsHero';

const Projects = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<ProjectsHero />
			<ProjectsSection />
			<ContactComponent message={t('projects.contact.text')} home />
		</>
	);
};

export default Projects;
