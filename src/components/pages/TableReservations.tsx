import sv from 'date-fns/locale/sv';
import { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router';
import { IBookingsLoader } from '../../loaders/bookingsLoader';
import { ActionType, BookingsReducer } from '../../reducers/BookingsReducer';
registerLocale('sv', sv);

export const TableReservations = () => {
	const [bookingsList, dispatch] = useReducer(BookingsReducer, []);
	const bookings = useLoaderData() as IBookingsLoader;

	if (bookingsList.length === 0) {
		dispatch({
			type: ActionType.GOTBOOKINGS,
			payload: JSON.stringify(bookings),
		});
	}
	console.log(bookingsList.length);

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
