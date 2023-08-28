import DecorationSlide from './Decoration/DecorationSlide';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
const Home = () => {
	return (
		<>
			<Hero />
			<Skills />
			<DecorationSlide />
			<Projects />
		</>
	);
};

export default Home;
