import React, {Component} from 'react';
import {ZiggeoRecorder} from 'react-ziggeo';
import {ZiggeoPlayer} from 'react-ziggeo';
import {Grid, Row, Col} from 'react-bootstrap';

import Config from './../config';

import './Videos.css';

class Videos extends Component {

  render() {

    return (

      <Grid>
        <Row>
          <Col sm={6} md={6} className="recordingVideo">
            <ZiggeoRecorder apiKey={Config.ziggeoAPIKey}/>
          </Col>
          <Col sm={6} md={6} className="playingVideo videoOne">
            <ZiggeoPlayer apiKey={'your api key provided by ziggeo'} ziggeo-video={'79ca238eaf0d3a6adb095a3f3ea143f9'} ziggeo-theme={'modern'} ziggeo-themecolor={'red'} ziggeo-skipinitial={false}/>
          </Col>
          <Col sm={6} md={6} className="playingVideo videoTwo">
            <ZiggeoPlayer apiKey={'your api key provided by ziggeo'} ziggeo-video={'80b243ff58ce34bb90120876edc0a061'} ziggeo-theme={'modern'} ziggeo-themecolor={'red'} ziggeo-skipinitial={false}/>
          </Col>
          <Col sm={6} md={6} className="youtube">
            <iframe src="https://www.youtube.com/embed/sIgv3tTYYqQ" allowfullscreen></iframe>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default Videos;
