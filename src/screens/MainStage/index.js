import React, {Component} from 'react';

class MainStage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage:'',
    };
  }



  render() {
    return (
      <div className="MainStage">
        <div>
          <h2>Main stage:</h2>
        </div>
      </div>
    );
  }
}

export default MainStage;