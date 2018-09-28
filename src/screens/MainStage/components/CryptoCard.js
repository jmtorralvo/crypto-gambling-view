import React, {Component} from 'react';

class CryptoCard extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { onSelect, name, icon } = this.props;
    return (
      <div>
        <button onClick={() => {onSelect(name)}}>
          <img src={icon} width="100" height="100" />
          <h4>{name}</h4>
        </button>
      </div>
    )
  }
}

export default CryptoCard;