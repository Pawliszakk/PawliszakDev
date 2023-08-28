import Layout from '../../components/layout/Layout';
import { ThemeContextProvider } from '../../store/theme-context';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					href="/assets/icons/favicon.ico"
					type="image/x-icon"
					sizes="any"
				/>
				<link
					rel="apple-touch-icon"
					href="/assets/icons/apple-touch-icon.png"
					type="image/png"
					sizes="180x180"
				/>
				<link rel="shortcut icon" href="/assets/icons/favicon.ico" />
			</Head>
			<ThemeContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeContextProvider>
		</>
	);
}
