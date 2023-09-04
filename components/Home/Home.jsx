import ContactComponent from '../ContactComponent/ContactComponent';

import DecorationSlide from './Decoration/DecorationSlide';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import { useTranslation } from 'react-i18next';
const Home = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<Hero />
			<Skills />
			<DecorationSlide />
			<Projects />
			<ContactComponent message={t('homepage.contact.text')} home />
		</>
	);
};

export default Home;
