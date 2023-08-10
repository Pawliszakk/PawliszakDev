import Hero from '../../components/Home/Hero/Hero';
import AboutMe from '../../components/Home/AboutMe/Skills';
import Head from 'next/head';
const HomePage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev</title>
				<meta name="description" content="PawliszakDev's portfolio page" />
			</Head>
			<Hero />
			<AboutMe />
		</>
	);
};

export default HomePage;
