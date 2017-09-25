import React, {Component} from 'react';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import {Jumbotron} from 'react-bootstrap';

import './Statement.css';

class Statement extends Component {

  render() {

    return (

      <Jumbotron>
        <h2>
          <TypistLoop interval={3000}>
            {
              ['We Record and Process',
              '24/7 Available Usage',
              'Transcribe and Translate'].map(
                text => <Typist key={text} startDelay={1000}>{text}</Typist>
              )
            }
          </TypistLoop>
        </h2>
      </Jumbotron>

    );
  }
}

export default Statement;
