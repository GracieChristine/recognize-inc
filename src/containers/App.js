import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

import Statement from './../components/Statement.jsx';
import Feature from './../components/Feature.jsx';
import PageBreakerOne from './../components/PageBreakerOne.jsx';
import Videos from './../components/Videos.jsx';
import PageBreakerTwo from './../components/PageBreakerTwo.jsx';
import SpeechTranscription from './../components/SpeechTranscription.jsx';
import PageBreakerThree from './../components/PageBreakerThree.jsx';
import TextTranslation from './../components/TextTranslation.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><h1>Recognize Inc.</h1></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Text pullRight>
          <h3>A simple speech translational plateform</h3>
        </Navbar.Text>
      </Navbar>
      {/* CONTENT */}
      <div className="wrapper">

        <Statement />
        <Feature />
        <PageBreakerOne />
        <Videos />
        <PageBreakerTwo />
        <SpeechTranscription />
        <PageBreakerThree />
        <TextTranslation />

        <div className="push"></div>

      </div>
      {/* FOOTER */}
      <div className="footer">
        <p>
          &copy; 2017
          <script type="text/javascript">
            new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());
          </script>
          , Recognize Inc.
        </p>
      </div>
    </div>

    );
  }
}

export default App;
