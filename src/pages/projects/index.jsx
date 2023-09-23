import Head from 'next/head';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import dynamic from 'next/dynamic';

const Projects = dynamic(
	() => import('../../../components/Projects/Projects'),
	{
		loading: () => <LoadingSpinner />,
	}
);
const ProjectsPage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Projects</title>
				<meta
					name="description"
					content="Discover my work, get a preview of my latest projects as a React Frontend Developer. See the combination of code and creativity that creates beautiful projects."
				/>
			</Head>
			<Projects />
		</>
	);
};

export default ProjectsPage;
