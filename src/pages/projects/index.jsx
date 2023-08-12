import Head from 'next/head';
import Projects from '../../../components/Projects/Projects';
const ProjectsPage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Projects</title>
				<meta name="description" content="Take a closer look at my projects!" />
			</Head>
			<Projects/>
		</>
	);
};

export default ProjectsPage;
