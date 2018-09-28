import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  enterProfile() {
    document.location.href = './mainstage'
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
            Enter2
          </button>
        </div>
      </div>
    );
  }
}

export default Login;