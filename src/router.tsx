import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { TableReservations } from './components/TableReservations';
import { Contact } from './components/pages/Contact';
import StartPage from './components/pages/StartPage';

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
		],
	},
]);
