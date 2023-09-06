import { IBooking } from '../models/IBookings';
import { IRestaurant } from '../models/IRestaurant';
import { get } from './ServiceBase';

export const getBookings = async () => {
	return await get<IBooking[]>(
		`/booking/restaurant/${import.meta.env.VITE_RESTAURANT_ID}`
	);
};

export const getRestaurant = async () => {
	const response = await get<IRestaurant[]>('restaurant/' + import.meta.env.VITE_RESTAURANT_ID);
	return response[0];
};
