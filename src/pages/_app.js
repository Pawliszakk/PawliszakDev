import Layout from '../../components/layout/Layout';
import '../styles/globals.css';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/icons/favicon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					href="/assets/icons/apple-touch-icon.png"
					type="image/png"
					sizes="180x180"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
