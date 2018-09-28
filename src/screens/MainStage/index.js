import React, {Component} from 'react';

import Bet from './components/Bet';
import Timer from './components/Timer';
import CryptoCard from './components/CryptoCard';
import Result from './components/Result';

const coins = [
  {
    name: 'BTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  },
  {
    name: 'LTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  },
  {
    name: 'ETH',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  },
  {
    name: 'TRX',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  }
];

const users = [
  { username: 'ME' },
  { username: 'User 1' },
  { username: 'User 2' },
  { username: 'User 3' },
];


class MainStage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'bet',
      coinSelected: '',
      listCoins: coins.map((coin) =>
        <CryptoCard 
          icon={coin.icon}
          name={coin.name}
          onSelect={name => this.onSelecCoin(name)}
        >
        </CryptoCard>
      )
    };
  }
  
  onSelecCoin(name){
    this.setState({
      coinSelected: name,
      stage: 'fight'
    })
  }

  onSelectBet(amount){
    this.setState({
      bet: amount,
      stage: 'choseCoin'
    });
  }

  onEndCouwntDown(){
    if (this.state.stage === 'chooseCoin') {
      this.setState({
        stage: 'fight'
      });
    } else if (this.state.stage === 'fight') {
      this.setState({
        stage: 'result'
      });
    }
  }

  startCoinSelection() {

  }

  render() {
    return (
      <div className="MainStage">
        <div>
          { this.state.stage === 'bet' &&
            <Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
          }
          { this.state.stage === 'choseCoin' &&
            <div>
              <div>
                <h2>Choose your crypto-fighter:</h2>
                <h4>You have 10 seconds...</h4>
              </div>
              <div>
                <Timer onFinish={() => this.onEndCouwntDown()}></Timer>
              </div>
              <div> 
                {this.state.listCoins}
              </div>
            </div>
          } 
          { this.state.stage === 'fight' &&
            <div>
              <h2>Values ​​fluctuating.</h2>
              <h4>Maybe another currency has been created in this time...</h4>
              <h4>Maybe one has disappeared...</h4>
              <Timer 
                onFinish={() => this.onEndCouwntDown()}
                maxTime={3}
              >
              </Timer>
            </div>
          }
          { this.state.stage === 'result' &&
            <Result></Result>
          }
        </div>
      </div>
    );
  }
}

export default MainStage;