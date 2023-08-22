import MainNavigaiton from './nav/MainNavigation';
import Footer from './footer/Footer';

import ScrollToTop from '../UI/PortalComponents/ScrollToTop';
import StartingOverlay from '../UI/PortalComponents/StartingOverlay';
const Layout = ({ children }) => {
	return (
		<>
			<MainNavigaiton />
			<main>{children}</main>
			<Footer />
			<ScrollToTop />
			{/* <StartingOverlay /> */}
		</>
	);
};

export default Layout;
