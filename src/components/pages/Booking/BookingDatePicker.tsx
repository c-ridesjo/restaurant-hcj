import en from 'date-fns/locale/en-GB';
import { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import { useAvailableTable } from '../../../hooks/useAvailableTabel';
import { IBooking } from '../../../models/IBookings';
import { BookingsReducer } from '../../../reducers/BookingsReducer';
import { CenteredWrapper, SmallWrapper } from '../../styled/Wrappers';
registerLocale('en', en);

export const BookingDatePicker = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [startDate, setStartDate] = useState(new Date());
	const [customerAmount, setCustomerAmount] = useState<number>(1);

	const bookings = useLoaderData() as IBooking[];
	const [bookingsList] = useReducer(BookingsReducer, bookings);

	const isAvailable = useAvailableTable(startDate, bookingsList);
	const getAvaliableTables = (e: FormEvent) => {
		e.preventDefault();

		setIsHidden(false);
	};

	// clicking on a time should set the var isBookingTable in Booking.tsx to true.
	console.log(bookingsList);
	console.log(isAvailable);

	return (
		<CenteredWrapper>
			<form onSubmit={getAvaliableTables}>
				<div>
					<span>Date: </span>
					<DatePicker
						selected={startDate}
						locale='en'
						onChange={(date) => {
							if (date === null) {
								return;
							}
							setStartDate(date);
						}}
					/>
				</div>
				<label>
					<span>Number of guests: </span>
					<input
						type='number'
						min='1'
						max='6'
						value={customerAmount}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setCustomerAmount(+e.target.value)
						}
					/>
				</label>
				<button>Search</button>
			</form>

			<SmallWrapper className={isHidden ? 'hidden' : 'showing'}>
				<p>Display avaliable times for the date here</p>
			</SmallWrapper>
		</CenteredWrapper>
	);
};
