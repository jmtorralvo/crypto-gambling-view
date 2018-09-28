import React, {Component} from 'react';

import {
  WinImgWrapper, BtnAgain, PositiveDeviation, NegativeDeviation,
  CoinColumn,
} from '../styles';

class Result extends Component {

  constructor(props) {  
    super(props);
    this.state = {
      winner: this.props.winner
    };
  }

  playAgain(){
    document.location.href = './mainstage';
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
              <img src={'/images/lost.png'} width="420" height="327" />
            </WinImgWrapper>
          </div>
        </div>
        }
        {
          this.props.coins.map(coin => (
            <div>
              <CoinColumn>{coin.name}</CoinColumn>
              <CoinColumn>{coin.value}</CoinColumn>
              {coin.deviation > 0 && <PositiveDeviation>+{coin.deviation}</PositiveDeviation>}
              {coin.deviation < 0 && <NegativeDeviation>{coin.deviation}</NegativeDeviation>}
            </div>
          ))
        }
        <div>
          <graphWrapper>
            <img src={'/images/graphResult.png'} width="1158" height="528" />
          </graphWrapper>
        </div>
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
