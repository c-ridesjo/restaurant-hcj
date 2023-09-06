import sv from 'date-fns/locale/sv';
import { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router';
import { IBooking } from '../../models/IBookings';
import { BookingsReducer } from '../../reducers/BookingsReducer';
registerLocale('sv', sv);

export const TableReservations = () => {
	const bookings = useLoaderData() as IBooking[];
	const [bookingsList] = useReducer(BookingsReducer, bookings);

	// if (bookingsList.length === 0) {
	// 	dispatch({
	// 		type: ActionType.GOTBOOKINGS,
	// 		payload: JSON.stringify(bookings),
	// 	});
	// }

	const [startDate, setStartDate] = useState(new Date());
	const [customerAmount, setCustomerAmount] = useState<number>(1);

	const getAvaliableTables = (e: FormEvent) => {
		e.preventDefault();
		console.log(
			'tables for ' +
				customerAmount +
				' at ' +
				startDate.getDay() +
				'/' +
				startDate.getMonth() +
				'-' +
				startDate.getFullYear()
		);
	};
	console.log(bookingsList);
	// console.log(bookings);
	return (
		<section>
			<form onSubmit={getAvaliableTables}>
				<div>
					<span>Datum: </span>
					<DatePicker
						selected={startDate}
						locale='sv'
						onChange={(date) => {
							if (date === null) {
								return;
							}
							setStartDate(date);
						}}
					/>
				</div>
				<label>
					<span>Antal i sällskapet: </span>
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
				<button>Sök efter lediga bord</button>
			</form>
		</section>
	);
};
