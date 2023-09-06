import { IBooking } from '../models/IBookings';
import { getBookings } from '../services/RestaurantService';

export interface IBookingsLoader {
	bookings: IBooking[];
}

export const bookingsLoader = async () => {
	const response = await getBookings();

	// const data: IBookingsLoader = { bookings: response };

	return response;
};
