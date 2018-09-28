import React, {Component} from 'react';

import {
  Timer as TimerStyle
} from '../styles';


export default class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: {
        time: 0,
        isOn: false,
        start: 0
      }
    };
    this.startTimer = this.startTimer.bind(this)
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
        this.props.onFinish && this.props.onFinish();
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


  componentDidMount() {
    this.startTimer();
  }

  render() {
    return (
      <div>
        { this.state.timer.isOn && <TimerStyle>{this.state.timer.time}</TimerStyle>}
        { !this.state.timer.isOn && <TimerStyle>Time's finished</TimerStyle>}
      </div>
    )
  }

}