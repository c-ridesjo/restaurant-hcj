import React from 'react';
import { Header } from '../components/styled/Header';
import { Main } from '../components/styled/Main';
import { Footer } from '../components/styled/Footer';
import { Wrapper, ContentWrapper } from '../components/styled/Wrappers';

interface HomeProps {
  title: string;
  welcomeMessage: string;
  cookieInformation: string;
}

const Home: React.FC<HomeProps> = ({ title, welcomeMessage, cookieInformation }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Main>
          <p>{welcomeMessage}</p>
        </Main>
        <Footer>
          <p>{cookieInformation}</p>
        </Footer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
