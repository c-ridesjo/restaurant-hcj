import { IBooking } from '../models/IBookings';
import { get } from './ServiceBase';

export const getBookings = async () => {
	return await get<IBooking[]>(`/booking/restaurant/${id}`);
};
