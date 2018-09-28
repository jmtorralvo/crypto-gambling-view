import React, {Component} from 'react';

import Bet from './components/Bet';
import Timer from './components/Timer';



const COUNTDOWN_START = 10;
class MainStage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: '',
      bet: '',
    };
  }

  onSelectBet(amount){
    this.setState({
      bet: amount
    });
  }


  render() {
    return (
      <div className="MainStage">
        <Timer />
        <div>
          <Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
        </div>
      </div>
    );
  }
}

export default MainStage;