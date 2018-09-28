import React, {Component} from 'react';

import {
  SpinnerContainer, SpinnerWrapper,
} from '../styles';


export default class Spinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <SpinnerContainer>
        <SpinnerWrapper>
         <img src={'/images/spinner.png'} width="100" height="100" />
        </SpinnerWrapper>
      </SpinnerContainer>
    )
  }

}