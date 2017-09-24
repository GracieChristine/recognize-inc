import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Recognize Inc.</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Text pullRight>
          A simple speech translational plateform
        </Navbar.Text>
      </Navbar>
      {/* CONTENT */}
      <div className="wrapper">


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
