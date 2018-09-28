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
        <SubTitle>Lorem ipsum</SubTitle>
        <Button href="/login">Play now</Button>
      </Container>
    </Info>
    {/* <Content>
      <ContentContainer>
      </ContentContainer>
    </Content> */}
  </div>
);
