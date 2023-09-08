import { IBooking } from '../models/IBookings';

export interface IAction {
	type: ActionType;
	payload: string;
}

export enum ActionType {
	GOTBOOKINGS,
	ADDED,
	DELETED,
	UPDATED,
}

export const BookingsReducer = (
	bookings: IBooking[],
	action: IAction
): IBooking[] => {
	switch (action.type) {
		case ActionType.GOTBOOKINGS: {
			return JSON.parse(action.payload);
		}
		case ActionType.ADDED: {
			return [...bookings, JSON.parse(action.payload)];
		}
		case ActionType.DELETED: {
			return bookings.filter((booking) => booking._id !== action.payload);
		}
		case ActionType.UPDATED: {
			const parsedBooking: IBooking = JSON.parse(action.payload);
			return bookings.map((booking) => {
				if (booking._id === parsedBooking._id) {
					return {
						_id: parsedBooking._id,
						restaurantId: parsedBooking.restaurantId,
						date: parsedBooking.date,
						time: parsedBooking.time,
						numberOfGuests: parsedBooking.numberOfGuests,
						customerId: parsedBooking.customerId,
					}
				}
				return booking;
			})
		}
		default:
			return bookings;
	}
};
