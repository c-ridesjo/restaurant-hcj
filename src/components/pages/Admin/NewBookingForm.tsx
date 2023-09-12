import React from "react";
import { IBooking } from "../../../models/IBookings";
import {
  StyledInput,
  Label,
  InputContainer,
  LeftInputs,
  RightInputs,
} from "../../styled/Admin";
import { H3 } from "../../styled/Headings";
import { SaveButton } from "../../styled/Buttons";

interface NewBookingFormProps {
  newBooking: Partial<IBooking>;
  onChange: (updates: Partial<IBooking>) => void;
  onAddNewBooking: () => void;
}

export const NewBookingForm: React.FC<NewBookingFormProps> = ({
  newBooking,
  onChange,
  onAddNewBooking,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleSaveNewBooking = () => {
    onAddNewBooking();
  };

  return (
    <div style={{ width: "100%" }}>
      <H3>New booking</H3>
      <InputContainer>
        <LeftInputs>
          <div>
            <Label>Date</Label>
            <StyledInput
              name="date"
              value={newBooking.date || ""}
              onChange={handleInputChange}
              type="date"
            />
          </div>
          <div>
            <Label>Time</Label>
            <StyledInput
              name="time"
              value={newBooking.time || ""}
              onChange={handleInputChange}
              type="time"
            />
          </div>
          <div>
            <Label>Number of guests</Label>
            <StyledInput
              name="numberOfGuests"
              value={newBooking.numberOfGuests || ""}
              onChange={handleInputChange}
              type="number"
            />
          </div>
        </LeftInputs>
        <RightInputs>
          <div>
            <Label>First name</Label>
            <StyledInput
              name="firstname"
              value={newBooking.firstname || ""}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div>
            <Label>Last name</Label>
            <StyledInput
              name="lastname"
              value={newBooking.lastname || ""}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div>
            <Label>Phone number</Label>
            <StyledInput
              name="phone"
              value={newBooking.phone || ""}
              onChange={handleInputChange}
              type="tel"
            />
          </div>
          <div>
            <Label>Email</Label>
            <StyledInput
              name="email"
              value={newBooking.email || ""}
              onChange={handleInputChange}
              type="email"
            />
          </div>
        </RightInputs>
        <SaveButton onClick={handleSaveNewBooking}>Save New Booking</SaveButton>
      </InputContainer>
    </div>
  );
};

export default NewBookingForm;
