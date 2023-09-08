import React, { useEffect } from 'react';
import { IBooking } from '../../../models/IBookings';
import { H2 } from '../../styled/Headings';
import { AdminP, BookingBox } from '../../styled/Admin';

interface AdminBookingsProps {
  bookings: IBooking[];
  onSelect: (booking: IBooking) => void;
}

export const AdminBookings: React.FC<AdminBookingsProps> = ({ bookings, onSelect }) => {

  useEffect(() => {
    console.log('Updated Bookings List:', bookings);
  }, [bookings]);

  return (
    <section>
      <H2>Bookings</H2>
      <div>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingBox key={booking._id} onClick={() => onSelect(booking)}>
              <p><strong>Customer ID:  </strong> {booking.customerId}</p>
              <p><strong>Date:  </strong> {new Date(booking.date).toLocaleDateString()}</p>
              <p><strong>Time:  </strong> {booking.time}</p>
              <p><strong>Number of guests:  </strong>{booking.numberOfGuests}</p>
            </BookingBox>
          ))
        ) : (
          <AdminP>No bookings available at the moment.</AdminP>
        )}
      </div>
    </section>
  );
};

export default AdminBookings;
