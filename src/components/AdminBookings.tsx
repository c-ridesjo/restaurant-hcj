import React from 'react';
import { IBooking } from '../models/IBookings';
import { TableRow, TableData } from '../components/styled/Admin';

interface AdminBookingsProps {
  bookings: IBooking[];
  onSelect: (booking: IBooking) => void;
}

export const AdminBookings: React.FC<AdminBookingsProps> = ({ bookings, onSelect }) => {
    return (
        <div style={{ overflowY: 'auto', width: '50%' }}>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Number of guests</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <TableRow key={booking.id} onClick={() => onSelect(booking)}>
                    <TableData>{booking.customerId}</TableData>
                    <TableData>{booking.date}</TableData>
                    <TableData>{booking.time}</TableData>
                    <TableData>{booking.numberOfGuests}</TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableData> - </TableData>
                  <TableData> - </TableData>
                  <TableData> - </TableData>
                  <TableData> - </TableData>
                </TableRow>
              )}
            </tbody>
          </table>
        </div>
      );
      
};

export default AdminBookings;
