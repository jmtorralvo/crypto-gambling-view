import React, {Component} from 'react';

import Bet from './components/Bet';

import {
  Timer,
} from './styles';


const COUNTDOWN_START = 10;
class MainStage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: '',
      bet: '',
      timer: {
        time: 0,
        isOn: false,
        start: 0
      }
    };
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  startTimer() {
    this.setState({
      timer: {
        isOn: true,
        time: 10,
        start: Date.now(),
      }
    })
    this.timer = setInterval(() => {
      console.log('this.state.timer.time', this.state.timer.time)
      if (this.state.timer.time === 1) {
        this.setState({
          timer: {
            isOn: false,
            time: 0,
          }
        });
      } else {
        this.setState({
          timer: {
            isOn: true,
            time: this.state.timer.time - 1,
          }
        })
      }
    }, 1000);
  }

  stopTimer() {
    this.setState({
      timer: {
        isOn: false
      }
    })
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({
      timer: {
        time: 0, isOn: false
      }
    })
  }

  onSelectBet(amount){
    this.setState({
      bet: amount
    });
  }

  componentDidMount() {
    this.startTimer();
  }

  render() {
    return (
      <div className="MainStage">
        { this.state.timer.isOn && <Timer>{this.state.timer.time}</Timer>}
        { !this.state.timer.isOn && <Timer>Time's finished</Timer>}
        
        <div>
          <Bet onSelect={amount => this.onSelectBet(amount)}></Bet>
        </div>
      </div>
    );
  }
}

export default MainStage;