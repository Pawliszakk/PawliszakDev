import DecorationSlide from '../../components/Home/Decoration/DecorationSlide';
import Hero from '../../components/Home/Hero/Hero';
import AboutMe from '../../components/Home/Skills/Skills';
import Head from 'next/head';
import Projects from '../../components/Home/Projects/Projects';
const HomePage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Home Page</title>
				{/* <meta
					name="description"
					content="The portfolio website of React Frontend Developer, Oskar Pawliszak. Check out my latest projects and learn more about me and my skills."
				/> */}
				<meta
					name="description"
					content="I'm Oskar Pawliszak, a React Frontend Developer. Welcome to my portfolio website, PawliszakDev, where you can explore my latest projects and learn more about my skills and experiences. Feel free to browse through my work and get to know me better!"
				/>
			</Head>
			<Hero />
			<AboutMe />
			<DecorationSlide />
			<Projects />
		</>
	);
};

export default HomePage;
