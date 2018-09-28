import React, {Component} from 'react';

import {
  CryptoContainer,
  CoinName,
  Bold,
} from '../styles';

class CryptoCard extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { onSelect, name, icon, isSelected, value } = this.props;
    return (
      <CryptoContainer onClick={() => {onSelect(name)}} disabled={isSelected}>
        <CoinName><Bold>{name}</Bold> · ${value}</CoinName>
        <img src={icon} width="200" height="200" />
      </CryptoContainer>
        // { isSelected && <span>user {userSelection.username} selected this coin</span>  }
    )
  }
}

export default CryptoCard;
