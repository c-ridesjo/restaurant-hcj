import styled from 'styled-components';

export const AdminContainer = styled.div`
  padding: 20px;
`;

export const AddBookingContainer = styled.div`
  margin-bottom: 20px;
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
  width: 50%;
  border-right: 1px solid #ccc; 
`;

export const AdminFormContainer = styled.div`
  width: 50%;
  padding: 20px; 
  border: 1px solid black; 
  background-color: #dbf3ee;
  position: relative;
`;

export const AdminFormTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black; 
`;

export const SaveButton = styled.button`
  padding: 10px 15px;
  bottom: 10px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: darkgreen;
  }
`;

