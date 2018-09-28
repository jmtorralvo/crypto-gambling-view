import React, {Component} from 'react';
import {
  Info,
  Title,
  SubTitle,
} from './styles';

import {
  Container,
} from '../../styles';

export default () => (
  <div>
    <Info>
      <Container>
        <Title>Crypto Fighters</Title>
        <SubTitle>Lorem ipsum</SubTitle>
      </Container>
    </Info>
    <a href="/login">Login</a>
  </div>
);
