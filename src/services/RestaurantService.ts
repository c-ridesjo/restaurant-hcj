import { IBooking } from '../models/IBookings';
import { get } from './ServiceBase';

export const getBookings = async () => {
	return await get<IBooking[]>(
		`/booking/restaurant/${import.meta.env.VITE_RESTAURANT_ID}`
	);
};

export const getRestaurant = async () => {
	return await get('restaurant/' + import.meta.env.VITE_RESTAURANT_ID);
};
