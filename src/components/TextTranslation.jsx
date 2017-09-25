import React, {PropTypes, Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Config from './../config';
import './TextTranslation.css';

class TextTranslation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      textOutpu: '',
      langSource: 'en',
      langTarget: 'en'
    };
  }

  translating(textInput, langSource, langTarget) {
    fetch(`https://translation.googleapis.com/language/translate/v2?q=${textInput}&target=${langTarget}&format=text&source=${langSource}&key=${Config.googleAPIKey}`)
      .then((response) => response.json())
      .tehn((responseJSON) => {
        console.log(responseJSON.data.translations[0].translatedText);
        const text = responseJSON.data.translations[0].translatedText;
        this.setState({textOutput: text})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (

      <Grid>
        <Row>
          <Col>
            <h1>I'm working on the Translation section.</h1>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default TextTranslation;
