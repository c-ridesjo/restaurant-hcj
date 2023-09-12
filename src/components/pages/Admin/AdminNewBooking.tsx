import { FieldValues } from "react-hook-form";
import { BookingForm } from "../Booking/BookingForm";
import { AdminNewBookingInfo } from "./AdminNewBookingInfo";
import { IBookingInfo } from "../Booking/Booking";
import { useState } from "react";

export const AdminNewBooking: React.FC = () => {
	const [bookingInfo, setBookingInfo] = useState<IBookingInfo>({
		numberOfGuests: 0,
		dayOfService: '',
		serviceTime: '',
		showBookingForm: false,
	})

	const onSubmit = (data: FieldValues) => {
		setBookingInfo({
			numberOfGuests: Number(data.numberOfGuests),
			dayOfService: data.date,
			serviceTime: data.time,
			showBookingForm: true,
		})
		console.log(data);
		
	}
	console.log(bookingInfo.showBookingForm);		

	if (!bookingInfo.showBookingForm) {
		return <AdminNewBookingInfo onSubmit={onSubmit}></AdminNewBookingInfo>;
	} else {
		return <BookingForm bookingInfo={bookingInfo}></BookingForm>;
	}
};


