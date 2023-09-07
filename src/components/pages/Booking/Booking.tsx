import { useState } from 'react';
import { BookingDatePicker } from './BookingDatePicker';
import { BookingForm } from './BookingForm';

export const Booking = () => {
	const [hasChosenTime, setHasChosenTime] = useState(false);

	if (!hasChosenTime) {
		return <BookingDatePicker
			setHasChosenTime={setHasChosenTime}
		/>;
	} else {
		return <BookingForm />;
	}
};
