import MainNavigaiton from './MainNavigation';
import Footer from './Footer';
const Layout = ({ children }) => {
	return (
		<>
			<MainNavigaiton />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
