import { BookingDatePicker } from './BookingDatePicker';
import { BookingForm } from './BookingForm';
import '../../styles/Booking.scss';

export const Booking = () => {
	const isBookingTable = false;

	if (!isBookingTable) {
		return <BookingDatePicker />;
	} else {
		return <BookingForm />;
	}
};
