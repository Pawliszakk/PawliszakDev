import MainNavigaiton from './nav/MainNavigation';
import Footer from './footer/Footer';

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
