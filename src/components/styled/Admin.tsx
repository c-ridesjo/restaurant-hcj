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
`;

export const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  padding: 5px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: green;
  color: #fff;
  
  &:hover {
    background-color: darkgreen;
  }
`;

