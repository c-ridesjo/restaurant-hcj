import React from 'react';
import { IBooking } from '../models/IBookings';
import { H2 } from './styled/Headings';
import { AdminP } from './styled/Admin';

interface AdminBookingsProps {
  bookings: IBooking[];
  onSelect: (booking: IBooking) => void;
}

export const AdminBookings: React.FC<AdminBookingsProps> = ({ bookings, onSelect }) => {
    return (
        <section>
          <H2>Bookings</H2>
            <div>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <article key={booking.id} onClick={() => onSelect(booking)}>                    
                    <p>Customer ID: {booking.customerId}</p>
                    <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                    <p>Time: {booking.time}</p>
                    <p>Number of guests: {booking.numberOfGuests}</p>
                  </article>
                ))
              ) : (
                <AdminP>No bookings available at the moment.</AdminP>
            )}
            </div>
        </section>
      );
};


export default AdminBookings;
