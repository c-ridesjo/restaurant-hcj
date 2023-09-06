import styled from 'styled-components';

export const CookieBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const CookieButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #2980b9;
  color: #fff;

  &:hover {
    background-color: #3498db;
  }
`;

export const CookieMessage = styled.p`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: bold;
  color: #f42354;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
`;