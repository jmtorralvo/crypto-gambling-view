import React, {Component} from 'react';
import {
  Info,
  Title,
  SubTitle,
  Container,
} from './styles';

import {
  Button,
  Container as ContentContainer,
} from '../../styles';

export default () => (
  <div>
    <Info>
      <Container>
        <Title>Crypto Fighters</Title>
        <SubTitle>The game is too easy! select the amount you want to bet, choose the cryptocurrency that you think is going to increase the most its value in the following 10 seconds!</SubTitle>
        <SubTitle>Become a millonaire in a few minutes!</SubTitle>
        <Button href="/login">Play now</Button>
      </Container>
    </Info>
    {/* <Content>
      <ContentContainer>
      </ContentContainer>
    </Content> */}
  </div>
);
