import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

import './PageBreaker.css';

class PageBreaker extends Component {

  render() {

    return (

      // <div>
      //     {
      //       ['Record new or play them',
      //       'Transcribe it',
      //       'Translate it'].map(
      //         text => <Jumbotron className="sectionTitle"><h3 key={text}>{text}</h3></Jumbotron>
      //       )
      //     }
      // </div>

      <Jumbotron className="sectionTitle"><h3>Record new or play existing</h3></Jumbotron>

    );
  }
}

export default PageBreaker;
