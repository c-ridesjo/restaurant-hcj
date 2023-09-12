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
  align-items: center;
  font-size: 1.3rem;
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