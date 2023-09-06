import { IBooking } from '../models/IBookings';
import { get } from './ServiceBase';

const restaurantId = import.meta.env.VITE_RESTAURANT_ID;

export const getBookings = async () => {
	return await get<IBooking[]>(`/booking/restaurant/${restaurantId}`);
};

export const getRestaurant = async () => {
	return await get('restaurant/' + restaurantId);
};
