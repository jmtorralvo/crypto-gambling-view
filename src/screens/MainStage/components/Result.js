import React, {Component} from 'react';

import {
  WinImgWrapper, BtnAgain,
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
            <h1>Congratulations! You won your bet</h1>
          </div>
        }
        { !this.state.winner &&
          <div>
            <h1>Sorry! You lost your bet</h1>
          </div>
        }
        <div>
          <WinImgWrapper>
            <img src={'/images/winner.png'} width="440" height="347" />
          </WinImgWrapper>
        </div>
        <div>
          <BtnAgain>
            <button onClick={() => {this.playAgain()}}>
              Play again
            </button>
          </BtnAgain>
        </div>
      </div>
    )
  }
}

export default Result;
