import { IBooking } from '../models/IBookings';
import { IRestaurant } from '../models/IRestaurant';
import { get } from './ServiceBase';

const restaurantId = import.meta.env.VITE_RESTAURANT_ID;

export const getBookings = async () => {
	return await get<IBooking[]>(`/booking/restaurant/${restaurantId}`);
};

export const getRestaurant = async () => {
	const response = await get<IRestaurant[]>('restaurant/' + restaurantId);
	return response[0];
}
