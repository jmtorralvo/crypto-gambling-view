import React, {Component} from 'react';

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
          <h2>Choose you bet:</h2>
        </div>
        <div>
          <ul>
            <li>
              <button onClick={() => {
                this.setBet(10)
              }}>
                10
              </button>
            </li>
            <li>
              <button onClick={() => {
                this.setBet(20)
              }}>
                20
              </button>
            </li>
            <li>
              <button onClick={() => {
                this.setBet(50)
              }}>
                50
              </button>
            </li>
            <li>
              <button onClick={() => {
                this.setBet(100)
              }}>
                100
              </button>
            </li>
          </ul>
        </div>
        <div>
          bet: {this.state.bet}
        </div>
      </div>
    )
  }
}

export default Bet;
