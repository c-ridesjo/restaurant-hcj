import en from 'date-fns/locale/en-GB';
import { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import { IBookingsLoader } from '../../../loaders/bookingsLoader';
import { BookingsReducer, ActionType } from '../../../reducers/BookingsReducer';
import { CenteredWrapper } from '../../styled/Wrappers';
registerLocale('en', en);

export const BookingDatePicker = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [customerAmount, setCustomerAmount] = useState<number>(1);
  const [bookingsList, dispatch] = useReducer(BookingsReducer, []);
	const bookings = useLoaderData() as IBookingsLoader;

  const getAvaliableTables = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
			type: ActionType.GOTBOOKINGS,
			payload: JSON.stringify(bookings),
		});

    setIsHidden(false);
  };

  // clicking on a time should set the var isBookingTable in Booking.tsx to true.

  return (
    <section>
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

      <CenteredWrapper className={isHidden ? 'hidden' : 'showing'}>
        Display avaliable times for the date here
      </CenteredWrapper>
    </section>
  );
}