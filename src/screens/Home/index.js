import React, {Component} from 'react';
import {
  Info,
  Title,
  SubTitle,
  Button,
  Content,
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
        <Button href="/login">Play now</Button>
      </Container>
    </Info>
    <Content>
      <Container>
      </Container>
    </Content>
  </div>
);
