import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './screens/Home';
import Login from './screens/Login';
import MainStage from './screens/MainStage';

import {
  Header,
  Footer,
  Title,
  ShareTitle,
} from './styles';


const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

class App extends Component {
  render() {
    const loc = window.location.href;
    return (
      <div className="App">
        <Header>
          <Title>CRYPTO FIGHTERS</Title>
        </Header>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/mainstage" component={MainStage} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
        { loc[loc.length - 1] === '/' && 
          <Footer>
            <ShareTitle>
            </ShareTitle>
          </Footer>
        }
      </div>
    );
  }
}

export default App;
