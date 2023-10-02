import { useTranslation } from 'react-i18next';
import ContactComponent from '../ContactComponent/ContactComponent';

import AboutHeader from './Header/AboutHeader';
import Questions from './Questions/Questions';

import Roadmap from './Roadmap/Roadmap';

const AboutMe = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<AboutHeader />
			<Roadmap />
			<Questions />

			<ContactComponent message={t('about.contact.text')} />
		</>
	);
};

export default AboutMe;
