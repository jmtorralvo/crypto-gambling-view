import React, {Component} from 'react';

import Bet from './components/Bet';
import Timer from './components/Timer';
import CryptoCard from './components/CryptoCard';
import Users from './components/Users';
import Result from './components/Result';
import Spinner from './components/Spinner';
import { logResult } from '../../services/user.js';
import { MainTitle, MainStageContainer } from './styles';
import { getCrypto } from '../../services/user';


let beforeResults = [];
let afterResults = [];

const coins = [
  {
    name: 'BTC',
    icon: '/images/bitcoin.png',
  },
  {
    name: 'LTC',
    icon: '/images/litecoin.png',
  },
  {
    name: 'ETH',
    icon: '/images/ethereum.png',
  },
  {
    name: 'TRX',
    icon: '/images/tron.png',
  }
];

const users = [
  { username: 'Mike' , avatar: '/images/mike.jpeg'},
  { username: 'Peter', avatar: '/images/peter.jpeg'},
  { username: 'Victor', avatar: '/images/victor.jpeg'},
  { username: 'Glen', avatar: '/images/glen.jpeg'},
];

class MainStage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'bet',
      bet: 0,
      winner: false,
      coinSelected: '',
      coins,
      fakeParticipantsEngine: {
        time: 0,
        picked: 0
      },
      users,
      userSelection: users,
    };
    this.playAgain = this.playAgain.bind(this);
  }

  onSelecCoin(name){
    getCrypto().then(response => {
      response.data.map(coin => {
        const assetIdBase = coin['asset_id_name'];
        coins.map((c, index) => {
          if (assetIdBase === c.name) {
            coins[index].value = `${coin.rate}`;
            afterResults.push({
              ...coins[index]
            });
          }
        });

        afterResults.map((c, i) => {
          const beforeCoin = beforeResults[i].value;
          const afterCoin = afterResults[i].value;
          const deviation = ((afterCoin / beforeCoin) * 100)-100;
          coins[i].deviation = deviation;
        });
        console.log({coins})
        let winnerCoin = '';
        coins.map(c => {
          if (!winnerCoin) {
            winnerCoin = c;
          } else {
            if (c.deviation > winnerCoin.deviation) {
              winnerCoin = c;
            }
          }
        });
        console.log({ winnerCoin })
        console.log(this.state.coinSelected);
        this.setState({
          winner: winnerCoin.name === this.state.coinSelected,
        });
      })
    }).catch((err) => console.log('err', err));
    this.setState({
      coinSelected: name,
      stage: 'fight'
    });
  }

  onSelectBet(amount) {
    this.setState({bet: amount, stage: 'choseCoin'});
  }

  onEndCouwntDown() {
    if(this.state.stage === 'fight') {
      this.setState({stage: 'result'});
    }
  }

  componentDidMount() {
    getCrypto().then(response => {
      response.data.map(coin => {
        const assetIdBase = coin['asset_id_name'];
        coins.map((c, index) => {
          if (assetIdBase === c.name) {
            console.log(`${assetIdBase}-> $${coin.rate}`)
            coins[index].value = `${coin.rate}`;
            beforeResults.push({
              ...coins[index]
            });
          }
        });
      })
    }).catch((err) => console.log('err', err));
  }

  playAgain() {
    this.setState({
      stage: 'bet',
      bet: 0,
      winner: false,
      coinSelected: '',
      coins,
      fakeParticipantsEngine: {
        time: 0,
        picked: 0
      },
      users,
      userSelection: users,
    });
  }

  onSendResult() {
    const name = localStorage.getItem('cf_userName');
    const diff = this.state.win ? this.state.bet : -(Number(this.state.bet))
    logResult({
      userName: name,
      currentBet: this.state.bet,
      change: diff
    });
  }


  render() {
    return (
      <div className="MainStage">
        <MainStageContainer>
         {/*  <Spinner></Spinner> */}
          { (this.state.stage === 'bet' || this.state.stage === 'choseCoin') &&
            <div>
              <MainTitle>Pick your amount</MainTitle>
              <Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
            </div>
          }
          { this.state.stage === 'choseCoin' &&
            <div>
              <MainTitle>Pick your crypto-fighter:</MainTitle>
              <div>
                <h4>You have 10 seconds...</h4>
              </div>
              <div>
                <Timer onFinish={() => this.onEndCouwntDown()}></Timer>
              </div>
              <div>
                {this.state.coins.map((coin) =>
                  <CryptoCard
                    icon={coin.icon}
                    name={coin.name}
                    value={coin.value}
                    USDValue={6800}
                    isSelected={coin.isSelected}
                    userSelection={coin.userSelection}
                    onSelect={name => this.onSelecCoin(name)}
                  />
                )}
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
                maxTime={10}
              >
              </Timer>
            </div>
          }
          { this.state.stage === 'result' &&
            <Result
              winner={this.state.winner}
              playAgain={this.playAgain}
            />
          }
        </MainStageContainer>
      </div>
    );
  }
}

export default MainStage;
