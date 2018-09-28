import React, {Component} from 'react';

import Bet from './components/Bet';
import Timer from './components/Timer';
import CryptoCard from './components/CryptoCard';
import Users from './components/Users';
import Result from './components/Result';
import { MainTitle, MainStageContainer } from './styles';

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

  onSelecCoin(name){
    this.setState({
      coinSelected: name,
      stage: 'fight'})
  }

  onSelectBet(amount) {
    this.setState({bet: amount, stage: 'choseCoin'});
  }

  onEndCouwntDown() {
    this.setState({stage: 'result'});
  }


  render() {
    return (
      <div className="MainStage">
        {/* <Users users={users} /> */}
        <MainStageContainer>
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
                maxTime={3}
              >
              </Timer>
            </div>
          }
          { this.state.stage === 'result' &&
            <Result></Result>
          }
        </MainStageContainer>
      </div>
    );
  }
}

export default MainStage;
