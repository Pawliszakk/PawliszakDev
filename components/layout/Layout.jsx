import MainNavigaiton from './nav/MainNavigation';
import Footer from './footer/Footer';

import ScrollToTop from '../UI/buttons/ScrollToTop';
import StartingOverlay from '../UI/StartingOverlay';
const Layout = ({ children }) => {
	return (
		<>
			<MainNavigaiton />
			<main>{children}</main>
			<Footer />
			<ScrollToTop />
			<StartingOverlay />
		</>
	);
};

export default Layout;
