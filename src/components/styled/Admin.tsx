import styled from "styled-components";

export const AdminContainer = styled.div`
  padding: 20px;
`;

export const AddBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  margin-left: 5rem;
  border: 1px solid black;
  background-color: #dbf3ee;
  position: relative;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border: 1px solid black;
`;

export const TableHead = styled.thead`
  background-color: #f0f0f0;
  border-bottom: 1px solid black;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid black;
  background-color: #dbf3ee;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AdminBookingsContainer = styled.div`
  overflow-y: auto;
  width: 40%;
  border-right: 1px solid #ccc;
  border: 1px solid black;
  background-color: #dbf3ee;
  border-radius: 4px;
  margin-left: 5rem;
  padding: 2rem;
`;

export const AdminFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  margin-left: 5rem;
  border: 1px solid black;
  background-color: #dbf3ee;
  position: relative;
  border-radius: 4px;
`;

export const AdminFormTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
`;

export const AdminArticle = styled.article`
  overflow-y: auto;
  width: 60%;
`;

export const AdminP = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: black;
  text-align: center;
  margin-top: -6rem;
  display: block;
`;

export const AdmP = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: black;
  text-align: center;
  display: block;
`;

export const BookingBox = styled.article`
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    margin: 5px 0;
  }
`;

export const StyledInput = styled.input`
  padding: 5px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7rem;
`;

export const LeftInputs = styled.div`
  width: 45%;
`;

export const RightInputs = styled.div`
  width: 45%;
`;