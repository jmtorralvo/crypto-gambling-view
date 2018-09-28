import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  enterProfile() {
    console.log('foo', this.state.userName);
  }

  render() {
    return (
      <div className="Home">
        <div>
          <h2>Insert your user name:</h2>
        </div>
        <div>
          <label>
            Name:
            <input type="text" name="name" 
                value={this.state.userName} 
                onChange={event => {
                  console.log(event);
                  debugger;
                  //this.setState({ userName: event.target.value})
                  }
                  }/>
          </label>
          <button onclick={this.enterProfile()}>
            Enter
          </button>
        </div>
      </div>
    );
  }
}

export default Login;