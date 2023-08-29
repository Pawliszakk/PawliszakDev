import Layout from '../../components/layout/Layout';
import { ThemeContextProvider } from '../../store/theme-context';
import '../styles/globals.css';
import Head from 'next/head';
import global_en from '../../translations/en/global.json';
import global_pl from '../../translations/pl/global.json';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
	interpolation: { escapeValue: true },
	lng: 'en',
	resources: {
		en: {
			global: global_en,
		},
		pl: {
			global: global_pl,
		},
	},
});
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
			<I18nextProvider i18n={i18next}>
				<ThemeContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeContextProvider>
			</I18nextProvider>
		</>
	);
}
