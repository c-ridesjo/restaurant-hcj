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
	state: IBooking[],
	action: IAction
): IBooking[] => {
	switch (action.type) {
		case ActionType.GOTBOOKINGS: {
			const bookings = JSON.parse(action.payload);
			return bookings.bookings;
		}
		default:
			return state;
	}
};
