/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useEffect, useState } from 'react';
import { IBooking } from '../../models/IBookings';
import { bookingsLoader } from '../../loaders/bookingsLoader';
import { ActionType, BookingsReducer } from '../../reducers/BookingsReducer';
import AdminBookings from '../AdminBookings';
import AdminForm from '../AdminForm';

import {
  AdminContainer,
  AddBookingContainer,
  AdminBookingsContainer,
  AdminFormContainer,
  
} from '../styled/Admin';

export const AdminPage: React.FC = () => {
  const [state, dispatch] = useReducer(BookingsReducer, []);
  const [newBooking, setNewBooking] = useState<Partial<IBooking>>({});

  useEffect(() => {
    const loadBookings = async () => {
      const data = await bookingsLoader();
      console.log(data); // to check the structure of data
  
      dispatch({
        type: ActionType.GOTBOOKINGS,
        payload: JSON.stringify(data),
      });
      
    };
  
    loadBookings();
  }, []);
  

  const [selectedBooking, setSelectedBooking] = useState<IBooking | null>(null);

  const handleAddBooking = () => {
    if (newBooking) {
      dispatch({
        type: ActionType.ADDED,
        payload: JSON.stringify(newBooking),
      });
    }
  };

  const handleUpdateBooking = (id: string) => {
    const updatedBooking = state.find((booking) => booking.id === id);
    if (updatedBooking) {
      dispatch({
        type: ActionType.UPDATED,
        payload: JSON.stringify(updatedBooking),
      });
    }
  };

  const handleDeleteBooking = (id: string) => {
    dispatch({
      type: ActionType.DELETED,
      payload: id,
    });
  };

  return (
    <AdminContainer>
      <AddBookingContainer>
        {/* AddBookingContainer setup */}
      </AddBookingContainer>
      <div style={{ display: 'flex', height: '60vh', overflowY: 'auto' }}>
        <AdminBookingsContainer>
          <AdminBookings bookings={state} onSelect={setSelectedBooking} />
        </AdminBookingsContainer>
        <AdminFormContainer>
          <AdminForm booking={selectedBooking} />
        </AdminFormContainer>
      </div>
    </AdminContainer>
  );
  
};

export default AdminPage;
