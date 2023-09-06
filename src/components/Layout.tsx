import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout: React.FC = () => {
	return (
		<>
			<Header></Header>
			<main>
				<Outlet></Outlet>
			</main>
			<Footer></Footer>
		</>
	);
};

export default Layout;
