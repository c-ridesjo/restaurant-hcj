/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useState } from 'react';
import { IBooking } from '../../../models/IBookings';
import { ActionType, BookingsReducer } from '../../../reducers/BookingsReducer';
import AdminBookings from './AdminBookings';
import { AdminForm } from './AdminForm';

import {
  AdminContainer,
  AddBookingContainer,
  AdminBookingsContainer,
  AdminFormContainer,
  
} from '../../styled/Admin';
import { useLoaderData } from 'react-router-dom';

export const AdminPage: React.FC = () => {
  const bookings = useLoaderData() as IBooking[];
  const [bookingsList, dispatch] = useReducer(BookingsReducer, bookings);
  const [newBooking, setNewBooking] = useState<Partial<IBooking>>({});

  // useEffect(() => {
  //   const loadBookings = async () => {
  //     const data = await bookingsLoader();
  //     console.log(data); // to check the structure of data
  
  //     dispatch({
  //       type: ActionType.GOTBOOKINGS,
  //       payload: JSON.stringify(data),
  //     });
      
  //   };
  
  //   loadBookings();
  // }, []);
  

  const [selectedBooking, setSelectedBooking] = useState<IBooking | null>(null);

  const handleAddBooking = () => {
    if (newBooking) {
      dispatch({
        type: ActionType.ADDED,
        payload: JSON.stringify(newBooking),
      });
    }
  };

  const handleUpdateBooking = (id: string, updates: Partial<IBooking>) => {
    console.log('Handling Update', { id, updates });
    const updatedBooking = bookingsList.find((booking) => booking._id === id);
    if (updatedBooking) {
      const newBookingData = { ...updatedBooking, ...updates };
      console.log('New Booking Data', newBookingData);
      dispatch({
        type: ActionType.UPDATED,
        payload: JSON.stringify(newBookingData),
      });
    }
  };
  
  
  
  

  const handleDeleteBooking = (id: string) => {
    dispatch({
      type: ActionType.DELETED,
      payload: id,
    });
  };

  console.log(bookingsList);
  

  return (
    <AdminContainer>
      <AddBookingContainer>
        {/* AddBookingContainer setup */}
      </AddBookingContainer>
      <div style={{ display: 'flex', height: '60vh', overflowY: 'auto' }}>
        <AdminBookingsContainer>
          <AdminBookings bookings={bookingsList} onSelect={setSelectedBooking} />
        </AdminBookingsContainer>
        <AdminFormContainer>
          <AdminForm booking={selectedBooking} onUpdate={handleUpdateBooking} />
        </AdminFormContainer>
      </div>
    </AdminContainer>
  );
  
};

export default AdminPage;
