import React from 'react';
import { IBooking } from '../models/IBookings';
import { TableData, SaveButton, AdminP } from '../components/styled/Admin';

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
        <AdminP>No booking selected</AdminP>
      )}
        <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
     
    </div>
  );
};

const handleSaveChanges = () => {
/* 	if (booking) {
		// logik
	} */
};


export default AdminForm;
