import React, { useReducer, useEffect, useState } from "react";
import { IBooking } from "../../models/IBookings";
import { bookingsLoader } from "../../loaders/bookingsLoader";
import { ActionType, BookingsReducer } from "../../reducers/BookingsReducer";
import {
  AdminContainer,
  Table,
  TableHead,
  TableRow,
  TableData,
  ActionButton,
  AddBookingContainer,
  Input,
  AddButton,
} from "../styled/Admin";

export const AdminPage: React.FC = () => {
  const [state, dispatch] = useReducer(BookingsReducer, []);
  const [newBooking, setNewBooking] = useState<Partial<IBooking>>({});

  useEffect(() => {
    const loadBookings = async () => {
      const data = await bookingsLoader();
      dispatch({
        type: ActionType.GOTBOOKINGS,
        payload: JSON.stringify(data.bookings),
      });
    };

    loadBookings();
  }, []);

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
	<>
		<AdminContainer>
		<h2>Manage bookings</h2>
		<AddBookingContainer>
			<Input
			type="text"
			value={newBooking.customerId || ""}
			onChange={(e) =>
				setNewBooking({ ...newBooking, customerId: e.target.value })
			}
			placeholder="Name"
			/>

			<AddButton onClick={handleAddBooking}>Add Booking</AddButton>
		</AddBookingContainer>
		<Table>
			<TableHead>
			<TableRow>
				<TableData>Name</TableData>
				<TableData>Date</TableData>
				<TableData>Time</TableData>
				<TableData>Number of guests</TableData>
			</TableRow>
			</TableHead>
			<tbody>
			{state.map((booking: IBooking) => (
				<TableRow key={booking.id}>
				<TableData>{booking.customerId}</TableData>
				<TableData>{booking.date}</TableData>
				<TableData>{booking.time}</TableData>
				<TableData>{booking.numberOfGuests}</TableData>
				<TableData>
					<ActionButton onClick={() => handleUpdateBooking(booking.id)}>
					Update
					</ActionButton>
					<ActionButton onClick={() => handleDeleteBooking(booking.id)}>
					Delete
					</ActionButton>
				</TableData>
				</TableRow>
			))}
			</tbody>
		</Table>
		</AdminContainer>
	</>
  );
};

export default AdminPage;
