import React, { useEffect } from 'react';
import { IBooking } from '../../../models/IBookings';
import { StyledInput, SaveButton, AdminP, Label } from '../../styled/Admin'; 

interface AdminFormProps {
  booking: IBooking | null;
  onUpdate: (id: string, updates: Partial<IBooking>) => void;
}

export const AdminForm: React.FC<AdminFormProps> = ({ booking, onUpdate }) => {
  const [formData, setFormData] = React.useState<IBooking | null>(booking);

  useEffect(() => {
    setFormData(booking);
  }, [booking]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData!,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    console.log('handleSaveChanges is called');
    if (formData && formData._id) {
      onUpdate(formData._id, formData);
    }
  };
  

  return (
    <div style={{ width: '50%' }}>
      {formData ? (
        <>
          <div>
            <Label>Customer ID</Label>
            <StyledInput 
              name="customerId"
              value={formData.customerId}
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
          <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
        </>
      ) : (
        <AdminP>No booking selected</AdminP>
      )}
    </div>
  );
};
