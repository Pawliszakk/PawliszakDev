import dynamic from 'next/dynamic';
import Head from 'next/head';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
const Home = dynamic(() => import('../../components/Home/Home'), {
	loading: () => <LoadingSpinner />,
});
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
			<Home />
		</>
	);
};

export default HomePage;
