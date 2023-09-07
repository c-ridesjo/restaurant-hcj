import { getBookings } from '../services/RestaurantService';

export const bookingsLoader = async () => {
	const response = await getBookings();

	return response;
};
