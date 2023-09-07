import en from 'date-fns/locale/en-GB';
import { ChangeEvent, useReducer, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import { useAvailableTable } from '../../../hooks/useAvailableTable';
import { IBooking } from '../../../models/IBookings';
import { BookingsReducer } from '../../../reducers/BookingsReducer';
import { CenteredWrapper, SmallWrapper } from '../../styled/Wrappers';
registerLocale('en', en);

interface IBookingDatePickerProps {
  setHasChosenTime: (hasChosenTime: boolean) => void
}

export const BookingDatePicker = (props: IBookingDatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [customerAmount, setCustomerAmount] = useState<number>(1);

  const bookings = useLoaderData() as IBooking[];
  const [bookingsList] = useReducer(BookingsReducer, bookings);

  const isAvailable = useAvailableTable(startDate, bookingsList);

  return (
    <CenteredWrapper>
      <form>
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
      </form>

      <SmallWrapper>
        <div>
          {isAvailable['18:00'] < 15 ? <button onClick={() => {
            props.setHasChosenTime(true);
          }}>18:00</button> : null}
          {isAvailable['21:00'] < 15 ? <button onClick={() => {
            props.setHasChosenTime(true);
          }}>21:00</button> : null}
        </div>
        {isAvailable['18:00'] < 15 || isAvailable['21:00'] < 15 ? (
          <p>These are our available seatings for the evning</p>
        ) : (
          <p>Sorry, we are fully booked for the evening</p>
        )}
      </SmallWrapper>
    </CenteredWrapper>
  );
};
