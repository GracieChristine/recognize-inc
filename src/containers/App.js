import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Recognize Inc.</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        </Nav>
      </Navbar>
    );
  }
}

export default App;
