import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './styled/Main';

const Layout: React.FC = () => {
	return (
		<>
			<Header></Header>
			<Main>
				<Outlet></Outlet>
			</Main>
			<Footer></Footer>
		</>
	);
};

export default Layout;
