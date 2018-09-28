import React, {Component} from 'react';

class CryptoCard extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { onSelect, name, icon, isSelected, userSelection } = this.props;
    return (
      <div>
        <button onClick={() => {onSelect(name)}} disabled={isSelected}>
          <img src={icon} width="100" height="100" />
          <h4>{name}</h4>
        </button>
        { isSelected && <span>user {userSelection.username} selected this coin</span>  }
      </div>
    )
  }
}

export default CryptoCard;
