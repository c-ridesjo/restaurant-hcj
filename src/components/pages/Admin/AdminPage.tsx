import React, { useReducer, useState } from "react";
import { IBooking } from "../../../models/IBookings";
import { ActionType, BookingsReducer } from "../../../reducers/BookingsReducer";
import AdminBookings from "./AdminBookings";
import { AdminForm } from "./AdminForm";
import NewBookingForm from "../Admin/NewBookingForm";

import {
  AdminContainer,
  AddBookingContainer,
  AdminBookingsContainer,
  AdminFormContainer,
} from "../../styled/Admin";
import { useLoaderData } from "react-router-dom";

export const AdminPage: React.FC = () => {
  const bookings = useLoaderData() as IBooking[];
  const [bookingsList, dispatch] = useReducer(BookingsReducer, bookings);
  const [newBooking, setNewBooking] = useState<Partial<IBooking>>({});

  const [selectedBooking, setSelectedBooking] = useState<IBooking | null>(null);

  const handleAddBooking = () => {
    if (newBooking) {
      dispatch({
        type: ActionType.ADDED,
        payload: JSON.stringify(newBooking),
      });
      setNewBooking({});
    }
  };

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

  const handleDeleteBooking = (id: string) => {
    dispatch({
      type: ActionType.DELETED,
      payload: id,
    });
    setSelectedBooking(null);
  };

  const handleNewBookingChange = (updates: Partial<IBooking>) => {
    setNewBooking((prev) => ({ ...prev, ...updates }));
  };

  const [isAddingNewBooking, setIsAddingNewBooking] = useState(false);

  const handleAddNewBookingClick = () => {
    setIsAddingNewBooking(true);
  };

  const handleSaveNewBooking = () => {
    handleAddBooking();
    setIsAddingNewBooking(false);
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
            <NewBookingForm
              newBooking={newBooking}
              onChange={handleNewBookingChange}
              onAddNewBooking={handleSaveNewBooking}
            />
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
