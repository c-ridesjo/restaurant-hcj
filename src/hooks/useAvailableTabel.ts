import { useEffect, useState } from 'react';
import { IBooking } from '../models/IBookings';

interface ISeating {
	'18:00': number;
	'21:00': number;
}

export function useAvailableTable(date: Date, bookings: IBooking[]) {
	const [numberOfBookings, setNumberOfBookings] = useState<ISeating>({
		'18:00': 0,
		'21:00': 0,
	});

	useEffect(() => {
		const filterBookings = bookings.filter(
			(booking) => new Date(booking.date).toDateString() === date.toDateString()
		);
		if (filterBookings) {
			const countBookings = filterBookings.reduce(
				(acc, booking) => {
					const { time } = booking;
					if (time === '18:00' || time === '21:00') {
						acc[time]++;
					}
					return acc;
				},
				{ '18:00': 0, '21:00': 0 }
			);
			setNumberOfBookings(countBookings);
		}
	}, [bookings, date]);
	return numberOfBookings;
}
