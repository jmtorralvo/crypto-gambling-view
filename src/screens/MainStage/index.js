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
      coins,
      fakeParticipantsEngine: {
        time: 0,
        picked: 0,
      },
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
    this.startCoinSelection();
  }

  startCoinSelection() {
    setInterval(() => {
      if (this.state.fakeParticipantsEngine.time < 3) {
      } else if (this.state.fakeParticipantsEngine.time > 10 || this.state.fakeParticipantsEngine.picked === 3) {
        console.log('all have been picked');
        clearInterval(this);
      } else {
        const selectedParticipant = this.state.fakeParticipantsEngine.picked + 1;
        console.log('now we are selecting user', selectedParticipant)
        const coins = this.state.coins;
        coins[selectedParticipant].isSelected = true;
        coins[selectedParticipant].userSelection = users[this.state.fakeParticipantsEngine.picked + 1];
        this.setState({
          coins,
          fakeParticipantsEngine: {
            picked: this.state.fakeParticipantsEngine.picked + 1,
          }
        });
      }
      this.setState({
        fakeParticipantsEngine: {
          time: this.state.fakeParticipantsEngine.time + 1,
          picked: this.state.fakeParticipantsEngine.picked,
        }
      });
    }, 1500);
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
                {this.state.coins.map((coin) =>
                  <CryptoCard 
                    icon={coin.icon}
                    name={coin.name}
                    isSelected={coin.isSelected}
                    userSelection={coin.userSelection}
                    onSelect={name => this.onSelecCoin(name)}
                  />
                )}
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