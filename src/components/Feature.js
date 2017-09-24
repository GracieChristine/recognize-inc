import React, {Component} from 'react';
import {Grid, Col, Row, Clearfix} from 'react-bootstrap';

import './Feature.css';

class Feature extends Component {

  render() {

    return (

      <Grid>
        <Row className="features">
          <Col sm={6} md={4}>
            <h4>Recorded Video</h4>
          </Col>
          <Col sm={6} md={4}>
            <h4>Speech Transcription</h4>
          </Col>
          <Clearfix visibleSmBlock></Clearfix>
          <Col sm={6} md={4}>
            <h4>Text Translation</h4>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default Feature;
