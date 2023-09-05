import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { CookieBanner, ButtonGroup, CookieButton, CookieMessage } from './styled/Cookies';

const AcceptCookies: React.FC = () => {
  const [cookies, setCookie] = useCookies(['userAcceptedCookies']);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(cookies.userAcceptedCookies === undefined); 
  const [showMessage, setShowMessage] = useState(false);

  const handleAccept = () => {
    setCookie('userAcceptedCookies', true, { path: '/' });  // valet sparas i userAcceptedCookies
    setMessage('Accepted cookies');
    setVisible(false);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleDecline = () => {
    setCookie('userAcceptedCookies', false, { path: '/' });
    setMessage('Declined cookies');
    setVisible(false);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    visible ? (
      <CookieBanner>
        <span>Do you accept our cookies?</span>
        <ButtonGroup>
          <CookieButton onClick={handleAccept}>Accept</CookieButton>
          <CookieButton onClick={handleDecline}>Decline</CookieButton>
        </ButtonGroup>
      </CookieBanner>
    ) : (
        showMessage && <CookieMessage>{message}</CookieMessage>
    )
  );
};

export default AcceptCookies;
