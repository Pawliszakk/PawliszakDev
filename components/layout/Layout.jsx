import MainNavigaiton from './MainNavigation';

const Layout = ({ children }) => {
	return (
		<>
			<MainNavigaiton />
			<main>{children}</main>
		</>
	);
};

export default Layout;
