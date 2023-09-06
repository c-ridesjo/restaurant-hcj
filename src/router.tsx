import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Contact } from './components/pages/Contact';
import StartPage from './components/pages/StartPage';
import { TableReservations } from './components/pages/TableReservations';
import { bookingsLoader } from './loaders/bookingsLoader';

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
				loader: bookingsLoader,
				element: <TableReservations />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
