import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
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
		],
	},
]);
