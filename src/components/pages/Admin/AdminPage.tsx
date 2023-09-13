import React, { useEffect, useReducer, useState } from "react";
import { IBooking } from "../../../models/IBookings";
import { ActionType, BookingsReducer } from "../../../reducers/BookingsReducer";
import AdminBookings from "./AdminBookings";
import { AdminForm } from "./AdminForm";

import {
  AdminContainer,
  AddBookingContainer,
  AdminBookingsContainer,
  AdminFormContainer,
} from "../../styled/Admin";
import { useLoaderData } from "react-router-dom";
import { AdminNewBooking } from "./AdminNewBooking";
import { removeBooking } from "../../../services/RestaurantService";

export const AdminPage: React.FC = () => {
  const bookings = useLoaderData() as IBooking[];
  const [bookingsList, dispatch] = useReducer(BookingsReducer, []);
  const [selectedBooking, setSelectedBooking] = useState<IBooking | null>(null);


  useEffect(() => {
    dispatch({
      type: ActionType.GOTBOOKINGS,
      payload: JSON.stringify(bookings)
    });
  }, [bookings]);

  const handleUpdateBooking = (id: string, updates: Partial<IBooking>) => {
    const updatedBooking = bookingsList.find((booking) => booking._id === id);
    if (updatedBooking) {
      const newBookingData = { ...updatedBooking, ...updates };
      dispatch({
        type: ActionType.UPDATED,
        payload: JSON.stringify(newBookingData),
      });
    }
  };

  const handleDeleteBooking = async (id: string) => {
    setSelectedBooking(null);
    await removeBooking(id);
    dispatch({
      type: ActionType.DELETED,
      payload: id,
    });
    setSelectedBooking(null);
  };

  const [isAddingNewBooking, setIsAddingNewBooking] = useState(false);

  const handleAddNewBookingClick = () => {
    setIsAddingNewBooking(true);
  };

  return (
    <AdminContainer>
      <div style={{ display: "flex", height: "60vh", overflowY: "auto" }}>
        <AdminBookingsContainer>
          <AdminBookings
            bookings={bookingsList}
            onSelect={setSelectedBooking}
            onDelete={handleDeleteBooking}
            onAddNew={handleAddNewBookingClick}
          />
        </AdminBookingsContainer>

        {isAddingNewBooking ? (
          <AddBookingContainer>
            <AdminNewBooking/>
          </AddBookingContainer>
        ) : (
          <AdminFormContainer>
            <AdminForm
              booking={selectedBooking}
              onUpdate={handleUpdateBooking}
            />
          </AdminFormContainer>
        )}
      </div>
    </AdminContainer>
  );
};

export default AdminPage;
