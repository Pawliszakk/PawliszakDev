import Head from 'next/head';
import AboutMe from '../../../components/AboutMe/AboutMe';
const AboutMePage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - About Me</title>
				<meta
					name="description"
					content="Let's get to know each other a little more"
				/>
			</Head>
			<AboutMe />
		</>
	);
};

export default AboutMePage;
