import { IBooking } from '../models/IBookings';

export interface IAvailableTable {
	seatingOne: string;
	seatingTwo: string;
}

export const useAvailableTable = (
	date: Date,
	bookings: IBooking[]
): IAvailableTable => {
	const availableTable: IAvailableTable = {
		seatingOne: '18:00',
		seatingTwo: '21:00',
	};

	bookings.forEach((booking) => {
		const bookingDate = new Date(booking.date);
		if (date != bookingDate) {
			return availableTable;
		} else if (
			date === bookingDate &&
			booking.time === availableTable.seatingOne
		) {
			return availableTable.seatingTwo;
		} else return availableTable.seatingOne;
	});
	return availableTable;
};
