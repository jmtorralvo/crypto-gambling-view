import React, {Component} from 'react';

import {
  Room,
} from '../styles';

class Bet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bet:'',
    };
  }

  setBet(amount) {
    this.setState({
      bet: amount
    }, this.props.onSelect(amount))
  }


  render() {
    return (
      <div>
        <div>
          <Room
            src="/bet.png"
            onClick={() => {
              this.setBet(10)
            }} />
          <Room
            src="/bet.png"
            onClick={() => {
              this.setBet(20)
            }} />
          <Room
            src="/bet.png"
            onClick={() => {
              this.setBet(20)
            }} />
          <Room
            src="/bet.png"
            onClick={() => {
              this.setBet(30)
            }} />
        </div>
        <div>
          bet: {this.state.bet}
        </div>
      </div>
    )
  }
}

export default Bet;
