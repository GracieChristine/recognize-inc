import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './SpeechTranscription.css';

class SpeechTranscription extends Component {

  render() {

    return (

      <Grid>
        <Row>
          <Col>
            <div id="info">
              <h5 id="info_start">
                Click on the microphone icon and begin speaking.
              </h5>
              <h5 id="info_speak_now">
                Speak now.
              </h5>
              <h5 id="info_no_speech">
                No speech was detected. You may need to adjust your<a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892"> microphone settings</a>.
              </h5>
              <h5 id="info_no_microphone">
                No microphone was found. Ensure that a microphone is installed and that<a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
                   microphone settings </a>are configured correctly.
              </h5>
              <h5 id="info_allow">
                Click the "Allow" button above to enable your microphone.
              </h5>
              <h5 id="info_denied">
                Permission to use microphone was denied.
              </h5>
              <h5 id="info_blocked">
                Permission to use microphone is blocked. To change, go to<a href="chrome://settings/contentExceptions#media-stream"> Chrome media setting</a>.
              </h5>
              <h5 id="info_upgrade">
                Web Speech API is not supported by this browser. Upgrade to<a href="//www.google.com/chrome"> Chrome </a>version 25 or later.
              </h5>
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default SpeechTranscription;
