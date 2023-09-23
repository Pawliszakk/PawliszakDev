import Head from 'next/head';
import dynamic from 'next/dynamic';

import LoadingSpinner from '../../../components/UI/LoadingSpinner';
const AboutMe = dynamic(() => import('../../../components/AboutMe/AboutMe'), {
	loading: () => <LoadingSpinner />,
});
const AboutMePage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - About Me</title>
				<meta
					name="description"
					content="I'm Oskar Pawliszak - React Frontend Developer. Explore my journey, skills,  and let's embark on a journey to transform your digital landscape"
				/>
			</Head>
			<AboutMe />
		</>
	);
};

export default AboutMePage;
