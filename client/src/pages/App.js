import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import ReactLive2d from 'react-live2d';

import CustomNavBar from '../components/CustomNavBar'
import Dayquote from '../components/Dayquote'
import '../styles/App.css';

import HomePage from './Home/HomePage'
import LoginPage from './Login/LoginPage';
import AlgorithmsPage from './Algorithms/AlgorithmsPage';

class App extends Component {
  state = {
    response: {},
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data[0] }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/routes/quote');
    console.log(response)
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
    
  //   this.setState({ responseToPost: body });
  // };
  
render() {
    return (
      <Router>
        <div className="App">
        <CustomNavBar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/algorithms'>
            <AlgorithmsPage />
          </Route>
        </Switch>
        {/* api no longer running */}
        {/* <Container fluid>
          <Dayquote quote={this.state.response}/>
        </Container> */}

        {/* Uncomment below to see live 2d */}
        {/* <ReactLive2d
          width = { 300}
          height = { 500}
          bottom = { '10px'}
          right = { '50px'}
          ModelList = { ['Rice']}
          TouchBody = { ['What are you doing?', 'Humph']}
          PathFull='http://publicjs.supmiao.com/Resources/'
        /> */}
      </div>
      </Router>
    );
  }
}

export default App;