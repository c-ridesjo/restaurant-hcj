import { IBooking } from '../models/IBookings';
import { IRestaurant } from '../models/IRestaurant';
import { get, post, put, remove } from './ServiceBase';

export interface ICreateBooking {
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuests: number;
	customer: ICustomer;
}

interface ICustomer {
	name: string;
	lastname: string;
	email: string;
	phone: number;
}

interface IUpdateBooking {
	id: string;
	restaurantId: string;
	date: string;
	time: string;
	numberOfGuests: number;
	customerId: string;
}

export const restaurantId: string = import.meta.env.VITE_RESTAURANT_ID;

export const getRestaurant = async () => {
	const response = await get<IRestaurant[]>('restaurant/' + restaurantId);
	return response[0];
};

export const getCustomer = async (customerId: string) => {
	const response = await get<ICustomer[]>(`/customer/${customerId}`);
	return response[0];
};

export const getBooking = async (bookingId: string) => {
	const response = await get<IBooking[]>(`/booking/${bookingId}`);
	return response[0];
};

export const getBookings = async () => {
	return await get<IBooking[]>(`/booking/restaurant/${restaurantId}`);
};

export const createBooking = async (postMsg: ICreateBooking) => {
	return await post('booking/create', postMsg);
};

export const updateBooking = async (putMsg: IUpdateBooking) => {
	return await put(`/booking/update/${putMsg.id}`, putMsg);
};

export const removeBooking = async (bookingId: string) => {
	return await remove(`/booking/delete/${bookingId}`);
};
