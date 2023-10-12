import MainNavigaiton from './nav/MainNavigation';
import Footer from './footer/Footer';
import ScrollToTop from '../UI/PortalComponents/ScrollToTop';
import StartingOverlay from '../UI/PortalComponents/StartingOverlay';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
