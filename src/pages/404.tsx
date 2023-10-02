import dynamic from 'next/dynamic';
import Head from 'next/head';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const ErrorPage = dynamic(() => import('../../components/Error/ErrorPage'), {
	loading: () => <LoadingSpinner />,
});

const Custom404 = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Page Not Found</title>
				<meta name="robots" content="follow, noarchive, noindex"></meta>
			</Head>
			<ErrorPage />
		</>
	);
};

export default Custom404;
