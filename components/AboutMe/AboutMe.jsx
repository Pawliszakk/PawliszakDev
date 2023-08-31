import Contact from './Contact/Contact';
import AboutHeader from './Header/AboutHeader';
import Questions from './Questions/Questions';

import Roadmap from './Roadmap/Roadmap';

const AboutMe = () => {
	return (
		<>
			<AboutHeader />
			<Roadmap />
			<Questions />
			<Contact />
		</>
	);
};

export default AboutMe;
