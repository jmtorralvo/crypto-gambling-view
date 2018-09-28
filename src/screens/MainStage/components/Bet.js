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
            src="/bet/5.png"
            onClick={() => {
              this.setBet(5)
            }} />
          <Room
            src="/bet/10.png"
            onClick={() => {
              this.setBet(10)
            }} />
          <Room
            src="/bet/20.png"
            onClick={() => {
              this.setBet(20)
            }} />
          <Room
            src="/bet/30.png"
            onClick={() => {
              this.setBet(30)
            }} />
          <Room
            src="/bet/50.png"
            onClick={() => {
              this.setBet(50)
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
