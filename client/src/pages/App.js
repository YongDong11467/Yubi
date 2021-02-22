import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CustomNavBar from '../components/CustomNavBar'
import Dayquote from '../components/Dayquote'
import '../styles/App.css';

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
      <div className="App">
        <CustomNavBar />
        <Container fluid>
          <Dayquote quote={this.state.response}/>
        </Container>
      </div>
    );
  }
}

export default App;