import SectionTitle from '../UI/SectionTItle';
import classes from './AboutMe.module.css';
import AboutHeader from './Header/AboutHeader';
import Roadmap from './Roadmap/Roadmap';

const AboutMe = () => {
	return (
		<section className={classes.aboutMe}>
			<SectionTitle>About Me</SectionTitle>
			<AboutHeader />
			<Roadmap />
		</section>
	);
};

export default AboutMe;
