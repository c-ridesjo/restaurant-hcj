import React from 'react';
import Home from './Home';

interface LayoutProps {
  title: string;
  welcomeMessage: string;
  cookieInformation: string;
}

const Layout: React.FC<LayoutProps> = ({ title, welcomeMessage, cookieInformation }) => {
  return <Home title={title} welcomeMessage={welcomeMessage} cookieInformation={cookieInformation} />;
};

export default Layout;
