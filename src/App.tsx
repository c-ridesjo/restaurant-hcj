import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { getRestaurant } from './services/RestaurantService';
import { useEffect } from 'react';

function App() {
	// useEffect(() => {
	// 	const getData = async () => {
	// 		await getRestaurant();
	// 	}
	// 	getData();
	// });

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
