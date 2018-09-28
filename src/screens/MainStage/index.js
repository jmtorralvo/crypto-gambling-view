import React, {Component} from 'react';

import Bet from './components/Bet';
import Timer from './components/Timer';
import CryptoCard from './components/CryptoCard';
import Result from './components/Result';

const coins = [
  {
    name: 'BTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg'
  }, {
    name: 'LTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg'
  }, {
    name: 'ETH',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg'
  }, {
    name: 'TRX',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg'
  }
];

const users = [
  {
    username: 'ME',
    coinSelected: ''
  }, {
    username: 'User 1',
    coinSelected: ''
  }, {
    username: 'User 2',
    coinSelected: ''
  }, {
    username: 'User 3',
    coinSelected: ''
  }
];

class MainStage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'bet',
      coinSelected: '',
      coins,
      fakeParticipantsEngine: {
        time: 0,
        picked: 0
      },
      users,
      userSelection: users,
    };
  }

  onSelecCoin(name) {
    this.setState({
      coinSelected: name,
      stage: 'fight'})
  }

  onSelectBet(amount) {
    this.setState({bet: amount, stage: 'choseCoin'});
  }

  onEndCouwntDown() {
    /* if (this.state.stage === 'chooseCoin') {
      this.setState({stage: 'fight'});
    } else if (this.state.stage === 'fight') {
      this.setState({stage: 'result'});
    } */
    this.setState({stage: 'result'});
  }


  render() {
    return (
      <div className="MainStage">
        <div>{this.state.stage}</div>
        <div>
          {(this.state.stage === 'bet' || this.state.stage === 'choseCoin') &&
            <Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
}
          {this.state.stage === 'choseCoin' && 
          <div>
            <div>
              <h2>Choose your crypto-fighter:</h2>
            </div>
            <div>
              {this.state.coins.map((coin) => 
                <CryptoCard
                  icon={coin.icon}
                  name={coin.name}
                  isSelected={coin.isSelected}
                  userSelection={coin.userSelection}
                  onSelect={name => this.onSelecCoin(name)}
                />)}
            </div>
          </div>
}
          {this.state.stage === 'fight' && <div>
            <h2>Values ​​fluctuating.</h2>
            <h4>Maybe another currency has been created in this time...</h4>
            <h4>Maybe one has disappeared...</h4>
            <Timer onFinish={() => this.onEndCouwntDown()} maxTime={3}></Timer>
          </div>
}
          {this.state.stage === 'result' && <Result></Result>
}
        </div>
      </div>
    );
  }
}

export default MainStage;