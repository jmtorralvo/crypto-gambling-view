import React, {Component} from 'react';

import {
  WinImgWrapper, BtnAgain, PositiveDeviation, NegativeDeviation,
  CoinColumn, CoinContainer,
} from '../styles';
import { logResult } from '../../../services/user.js';

class Result extends Component {

  constructor(props) {  
    super(props);
    this.state = {
      winner: this.props.winner
    };
  }

  playAgain(){
    this.onSendResult()
    .then(resp => {
      document.location.href = './mainstage';
    })
    .catch(e => {console.log(e)})
  }

  onSendResult() {
    const name = localStorage.getItem('cf_userName') || 'unknown';
    const diff = this.state.winner ? this.state.bet : -(Number(this.state.bet))
    logResult({
      userName: name,
      currentBet: this.state.bet,
      change: diff
    });
  }

  render() {
    return (
      <div>
        { this.state.winner &&
        <div>
            <div>
              <h1>Congratulations! You won your bet</h1>
            </div>
          <div>
            <WinImgWrapper>
              <img src={'/images/winner.png'} width="420" height="327" />
            </WinImgWrapper>
          </div>
        </div>
        }
        { !this.state.winner &&
        <div>
          <div>
            <h1>Sorry! You lost your bet</h1>
          </div>
          <div>
            <WinImgWrapper>
              <img src={'/images/lost.png'} width="420" height="235" />
            </WinImgWrapper>
          </div>
        </div>
        }
        {
          this.props.coins.map(coin => (
            <CoinContainer>
              <CoinColumn>{coin.name}</CoinColumn>
              <CoinColumn>{coin.value}</CoinColumn>
              {coin.deviation > 0 && <PositiveDeviation>+{coin.deviation}%</PositiveDeviation>}
              {coin.deviation < 0 && <NegativeDeviation>{coin.deviation}%</NegativeDeviation>}
            </CoinContainer>
          ))
        }
        {/* <div>
          <graphWrapper>
            <img src={'/images/graphResult.png'} width="1158" height="528" />
          </graphWrapper>
        </div> */}
        <div>
          <BtnAgain>
            <button onClick={() => {this.props.playAgain()}}>
              Play again
            </button>
          </BtnAgain>
        </div>
      </div>
    )
  }
}

export default Result;
