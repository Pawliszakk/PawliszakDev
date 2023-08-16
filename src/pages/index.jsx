import Hero from '../../components/Home/Hero/Hero';
import AboutMe from '../../components/Home/Skills/Skills';
import Head from 'next/head';
const HomePage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Home Page</title>
				<meta
					name="description"
					content="The portfolio website of React Frontend Developer, Oskar Pawliszak. Check out my latest projects and learn more about me and my skills."
				/>
			</Head>
			<Hero />
			<AboutMe />
		</>
	);
};

export default HomePage;
