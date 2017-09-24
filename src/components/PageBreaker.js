import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

import './PageBreaker.css';

class PageBreaker extends Component {

  render() {

    return (

      <Jumbotron className="sectionTitle">
        <h3>Section Header</h3>
      </Jumbotron>

    );
  }
}

export default PageBreaker;
