import React from 'react';
import { IBooking } from '../models/IBookings';
import { TableData } from '../components/styled/Admin';

interface AdminFormProps {
  booking: IBooking | null;
}

export const AdminForm: React.FC<AdminFormProps> = ({ booking }) => {
  return (
    <div style={{ width: '50%' }}>
      {booking ? (
        <table>
          <tbody>
            <tr>
              <td>Customer ID</td>
              <TableData>{booking.customerId}</TableData>
            </tr>
            <tr>
              <td>Date</td>
              <TableData>{booking.date}</TableData>
            </tr>
            <tr>
              <td>Time</td>
              <TableData>{booking.time}</TableData>
            </tr>
            <tr>
              <td>Number of Guests</td>
              <TableData>{booking.numberOfGuests}</TableData>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>No booking selected</div>
      )}
      <button onClick={() => { /* Your save changes handler here */ }}>
        Save Changes
      </button>
    </div>
  );
};

export default AdminForm;
