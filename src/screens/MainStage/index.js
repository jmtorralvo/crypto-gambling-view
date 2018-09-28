import React, {Component} from 'react';

import Bet from './components/Bet';
import Timer from './components/Timer';
import CryptoCard from './components/CryptoCard';

const coins = [
  {
    name: 'BTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  },
  {
    name: 'BTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  },
  {
    name: 'BTC',
    icon: 'https://bitstickers.net/wp-content/uploads/2013/12/btc-mono1.jpg',
  },
  {
    name: 'BTC',
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
      stage: 'countdown'
    })
  }

  onSelectBet(amount){
    this.setState({
      bet: amount,
      stage: 'choseCoin'
    });

  }

  startCoinSelection() {
    
  }

  render() {
    return (
      <div className="MainStage">
        <Timer />
        <div>
          { this.state.stage === 'bet' &&
            <Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
          }
          { this.state.stage === 'choseCoin' &&
            //<Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
            <div>
              <div>
                <h2>Choose your crypto-fighter:</h2>
              </div>
              <div> 
                {this.state.listCoins}
              </div>
            </div>
          } 
          { this.state.stage === 'countdown' &&
            <h1>sgfsdsgfdg</h1>
          }
        </div>
      </div>
    );
  }
}

export default MainStage;