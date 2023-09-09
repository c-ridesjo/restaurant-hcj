import { useState } from 'react';
import { BookingDatePicker } from './BookingDatePicker';
import { BookingForm } from './BookingForm';

export interface IBookingInfo {
	numberOfGuests: number;
	dayOfService: string;
	serviceTime: string;
	showBookingForm: boolean;
}

export const Booking = () => {
	const [hasChosenTime, setHasChosenTime] = useState<IBookingInfo>({
		numberOfGuests: 0,
		dayOfService: '',
		serviceTime: '',
		showBookingForm: false,
	});

	const handleBookingInfo = (
		numberOfGuests: number,
		dayOfService: string,
		serviceTime: string,
		showBookingForm: boolean
	) => {
		const customerInfo: IBookingInfo = {
			numberOfGuests: numberOfGuests,
			dayOfService: dayOfService,
			serviceTime: serviceTime,
			showBookingForm: showBookingForm,
		};

		setHasChosenTime(customerInfo);
	};

	console.log(hasChosenTime);

	if (!hasChosenTime.showBookingForm) {
		return <BookingDatePicker handleBookingInfo={handleBookingInfo} />;
	} else {
		return <BookingForm bookingInfo={hasChosenTime} />;
	}
};
