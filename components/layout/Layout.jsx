

import MainNavigaiton from './MainNavigation';
import Footer from './Footer';

import ScrollToTop from '../UI/ScrollToTop';
const Layout = ({ children }) => {
	return (
		<>
			<MainNavigaiton />
			<main>{children}</main>
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default Layout;
