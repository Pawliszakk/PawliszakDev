import Head from 'next/head';
import Projects from '../../../components/Projects/Projects';

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
