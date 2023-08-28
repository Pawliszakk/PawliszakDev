import Head from 'next/head';
import AboutMe from '../../../components/AboutMe/AboutMe';

const AboutMePage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - About Me</title>
				<meta
					name="description"
					content="I'm Oskar Pawliszak - React Frontend Developer. Explore my journey, skills, and passion for innovation, and let's embark on a journey to transform your digital landscape"
				/>
			</Head>
			<AboutMe />
		</>
	);
};

export default AboutMePage;
