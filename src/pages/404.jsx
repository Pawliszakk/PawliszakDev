import ErrorPage from '../../components/Error/ErrorPage';
import Head from 'next/head';
const Custom404 = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Page Not Found</title>
			</Head>
			<ErrorPage />
		</>
	);
};

export default Custom404;
