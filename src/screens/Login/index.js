import React, {Component} from 'react';
import { loginUser } from '../../services/user.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  enterProfile() {
    loginUser(this.state.userName)
    .then(resp => {
      document.location.href = './mainstage';
    })
   .catch(error => {
    console.log(error);
   });
  }

  render() {
    return (
      <div className="Login">
        <div>
          <h2>Insert your user name:</h2>
        </div>
        <div>
          <label>
            Name:
            <input type="text" name="name" 
                value={this.state.userName} 
                onChange={event => {
                  this.setState({ userName: event.target.value})
                }}/>
          </label>
          <button onClick={() => {this.enterProfile()}}>
            Enter
          </button>
        </div>
      </div>
    );
  }
}

export default Login;