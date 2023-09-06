import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Contact } from './components/pages/Contact';
import StartPage from './components/pages/StartPage';
import { TableReservations } from './components/pages/TableReservations';
import AdminPage from './components/pages/AdminPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <StartPage />,
				index: true,
			},
			{
				path: '/booking',
				element: <TableReservations />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/admin',
				element: <AdminPage />,
				index: true,
			},
		],
	},
]);
