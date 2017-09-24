import React, {Component} from 'react';
import {ZiggeoRecorder} from 'react-ziggeo';
import {ZiggeoPlayer} from 'react-ziggeo';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

import './Videos.css';

class Videos extends Component {

  render() {

    return (

      <Grid>
    <Row>
      <Col sm={12} md={6} mdOffset={3}>
        <ZiggeoRecorder apiKey={'545c23b5e9ea038dd4fb8cb47f40609a'}/>
      </Col>
      <Clearfix visibleSmBlock></Clearfix>
      <Col sm={6} md={6}>
        <ZiggeoPlayer
          apiKey={'your api key provided by ziggeo'}
          ziggeo-video={'79ca238eaf0d3a6adb095a3f3ea143f9'}
          ziggeo-theme={'modern'}
          ziggeo-themecolor={'red'}
          ziggeo-skipinitial={false}
        />
      </Col>
      <Col sm={6} md={6}>
        <ZiggeoPlayer
          apiKey={'your api key provided by ziggeo'}
          ziggeo-video={'80b243ff58ce34bb90120876edc0a061'}
          ziggeo-theme={'modern'}
          ziggeo-themecolor={'red'}
          ziggeo-skipinitial={false}
        />
      </Col>
      <Clearfix visibleSmBlock></Clearfix>
      <Col sm={12} md={6} mdOffset={3}>
        <iframe src="https://www.youtube.com/embed/sIgv3tTYYqQ" allowfullscreen></iframe>
      </Col>
    </Row>
  </Grid>

    );
  }
}

export default Videos;
