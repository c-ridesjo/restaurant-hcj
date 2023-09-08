import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Contact } from './components/pages/Contact';
import StartPage from './components/pages/StartPage';
import { Booking } from './components/pages/Booking/Booking';
import { bookingsLoader } from './loaders/bookingsLoader';
import AdminPage from './components/pages/Admin/AdminPage';

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
				element: <Booking />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/admin',
				loader: bookingsLoader,
				element: <AdminPage />,
				index: true,
			},
		],
	},
]);
