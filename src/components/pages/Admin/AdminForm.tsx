import React, { useEffect } from "react";
import { IBooking } from "../../../models/IBookings";
import { SaveButton } from "../../styled/Buttons";
import {
  StyledInput,
  AdminP,
  Label,
  InputContainer,
  LeftInputs,
  RightInputs,
} from "../../styled/Admin";
import { ICustomer, getCustomer } from "../../../services/RestaurantService";
import { H3 } from "../../styled/Headings";

interface AdminFormProps {
  booking: IBooking | null;
  onUpdate: (id: string, updates: Partial<IBooking>) => void;
}

export const AdminForm: React.FC<AdminFormProps> = ({ booking, onUpdate }) => {
  const [formData, setFormData] = React.useState<IBooking | null>(booking);
  const [customerData, setCustomerData] = React.useState<ICustomer | null>(
    null
  );

  useEffect(() => {
    setFormData(booking);

    if (booking && booking.customerId) {
      getCustomer(booking.customerId).then(setCustomerData);
    } else {
      setCustomerData(null);
    }
  }, [booking]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData!,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    console.log("handleSaveChanges is called");
    if (formData && formData._id) {
      onUpdate(formData._id, formData);
      setFormData(null);
      setCustomerData(null);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <H3>Booking information</H3>
      {formData ? (
        <InputContainer>
          <LeftInputs>
            <div>
              <Label>Booking ID</Label>
              <StyledInput
                name="bookingId"
                value={formData._id}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Date</Label>
              <StyledInput
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                type="date"
              />
            </div>
            <div>
              <Label>Time</Label>
              <StyledInput
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                type="time"
              />
            </div>
            <div>
              <Label>Number of guests</Label>
              <StyledInput
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                type="number"
              />
            </div>
          </LeftInputs>
          {formData && customerData && (
            <RightInputs>
              <div>
                <Label>First name</Label>
                <StyledInput
                  name="firstname"
                  value={customerData?.name || ""}
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
              <div>
                <Label>Last name</Label>
                <StyledInput
                  name="lastname"
                  value={customerData?.lastname || ""}
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
              <div>
                <Label>Phone number</Label>
                <StyledInput
                  name="phone"
                  value={customerData?.phone || ""}
                  onChange={handleInputChange}
                  type="tel"
                />
              </div>
              <div>
                <Label>Email</Label>
                <StyledInput
                  name="email"
                  value={customerData?.email || ""}
                  onChange={handleInputChange}
                  type="email"
                />
              </div>
            </RightInputs>
          )}
        </InputContainer>
      ) : (
        <AdminP>No booking selected</AdminP>
      )}

      {formData && (
        <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
      )}
    </div>
  );
};
