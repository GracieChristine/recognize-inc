import React, {Component} from 'react';
import {Grid, Row, Col, Button, Image} from 'react-bootstrap';

import './SpeechTranscription.css';

class SpeechTranscription extends Component {

  render() {

    return (

      <Grid>
        <Row>
          {/* GOOGLE SPEECH RECOGNITION */}
          <Col>
            <div id="info">
              <h5 id="info_start">Click on the microphone icon and begin speaking.</h5>
              <h5 id="info_speak_now">Speak now.</h5>
              <h5 id="info_no_speech">No speech was detected. You may need to adjust your
                <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
                  microphone settings</a>.</h5>
              <h5 id="info_no_microphone">
                No microphone was found. Ensure that a microphone is installed and that
                <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
                  microphone settings</a>
                are configured correctly.</h5>
              <h5 id="info_allow">Click the "Allow" button above to enable your microphone.</h5>
              <h5 id="info_denied">Permission to use microphone was denied.</h5>
              <h5 id="info_blocked">Permission to use microphone is blocked. To change, go to
                <a href="chrome://settings/contentExceptions#media-stream">Chrome media setting</a>.</h5>
              <h5 id="info_upgrade">Web Speech API is not supported by this browser. Upgrade to
                <a href="//www.google.com/chrome">Chrome</a>
                version 25 or later.</h5>
            </div>
            <div className="right">
              <Button id="start_button" onclick="startButton(event)">
                <Image id="start_img" src="./../images/transcription/mic.gif" alt="Start"/>
              </Button>
            </div>
            <div id="results">
              <span id="final_span" className="final"></span>
              <span id="interim_span" className="interim"></span>
            </div>
            <div className="center">
              <div className="sidebyside">
                <Button id="copy_button" className="butotn" onclick="copyButton()">Copy & Paste</Button>
                <div id="copy_info" className="info">
                  Press
                  <i>Control C / Command C</i>
                  to copy text.
                </div>
              </div>
              <div className="sidebyside">
                <Button id="email_button" className="butotn" onclick="emailButton()">Create Email</Button>
                <div id="email_info" className="info">
                  Text sent to default email application.
                  <br/>
                  (See chrome://settings/handlers to change.)
                </div>
              </div>
              <div id="div_language">
                <select id="select_language" onchange="updateCountry()"></select>
                <select id="select_dialect"></select>
              </div>
            </div>
          </Col>
          {/* DICTATION.IO */}
          {/* <Col>

            <div className="info" id="about">
              <h1>Speech Recognition in the Browser</h1>
              <p>With Dictation, you can use the magic of speech recognition to write emails, narrate essays and long documents in the browser without touching the keyboard.</p>
              <p>To get started, just connect the microphone to your computer and click the Start Dictation button.</p>
              <p>Dictation uses your browser's local Storage to save all the transcribed text automatically as you speak. That means you can close the browser and it will resume from where you left off.</p>
              <p>The app internally uses the built-in speech recognition engine of Google Chrome to transform your voice into digital text.
              </p>
              <h3>Speak in your Native Language</h3>
              <p>You don't have to speak in English as Chrome's engine can recognize quite a few languages including Arabic, Chinese, Spanish, French, German, Italian, Malay, Indonesian and more. Dictation will automatically determine your browser's default launguage and uses it for subsequent transcriptions.</p>
              <p>Hindi is the only Indian language that is supported at this time.</p>
              <p>Written by
                <a href="https://ctrlq.org/">Amit Agarwal</a>
                for
                <a href="http://www.labnol.org/">Digital Inspiration</a>.</p>
              <p>
                <a href="#" onclick="toggleVisibility('1'); return false;">Close</a>
              </p>
            </div>
            <div className="info" id="commands">
              <h2>Dictation Commands and Tips</h2>
              <p>You can narrate long sentences in one go and Chrome's built-in speech recognition will transcribe them simultaneously. See
                <a href="https://www.youtube.com/watch?v=fDX-RVCmfWU&hd=1" target="_blank">video demo</a>.</p>
              <p>1. Say "New Paragraph" to begin a new paragraph</p>
              <p>2. Say "Comma", "Full Stop", "Question Mark" for punctuation</p>
              <p>3. Click the "Stop Listening" button to end the speech recognition session. You can click the "Start" button again to resume transcription.</p>
              <h3>Web Speech API in Google Chrome</h3>
              <p>Dictation uses the x-webkit-speech attribute of HTML5 that is only implemented in Google Chrome. This attribute is only implemented for &lt;input&gt; (single-line) form fields so Dictation uses a workaround. It hides the speech-enabled input behind the microphone icon and appends the transcribed text to a regular DIV.</p>
              <p>
                <a href="#" onclick="toggleVisibility('1'); return false;">Close</a>
              </p>
            </div>

            <div className="notepad">
              <div className="notepad-heading">
                <h1>Transcribe It</h1>
              </div>
              <div id="speech">
                <span id="labnol" contenteditable="true"></span>
                <span id="notfinal"></span>
                <span id="warning"></span>
              </div>
              <div className="whatisthis">
                <span id="messages">
                  <a href="#" onclick="javascript:action();return false;" id="btn">Loading..</a>
                  <a href="#" onclick="javascript:clearSlate();return false;" id="btnClear">Clear</a>
                  <a href="#" onclick="javascript:save();return false;" id="btnClear" title="Download your text">Save</a>
                  <a href="#" onclick="copied();return false" data-clipboard-target="#labnol" id="btnCopy" title="Copy the text to clipboard">Copy</a>
                  <img id="status" src="listen.gif"/>
                </span>
              </div>
            </div>
            <div className="platforms" id="platformslang">
              <span className="language">
                <select name="lang" id="lang" onchange="updateLang(this)">
                  <option value="af-ZA">Afrikaans</option>
                  <option value="id-ID">Bahasa Indonesia</option>
                  <option value="ms-MY">Bahasa Melayu</option>
                  <option value="ca-ES">Català</option>
                  <option value="cs-CZ">Čeština</option>
                  <option value="da-DK">Dansk</option>
                  <option value="de-DE">Deutsch</option>
                  <optgroup label="English">
                    <option value="en-AU">Australia</option>
                    <option value="en-CA">Canada</option>
                    <option value="en-IN">India</option>
                    <option value="en-NZ">New Zealand</option>
                    <option value="en-ZA">South Africa</option>
                    <option value="en-GB">United Kingdom</option>
                    <option value="en-US" selected>United States</option>
                  </optgroup>
                  <optgroup label="Español">
                    <option value="es-AR">Argentina</option>
                    <option value="es-BO">Bolivia</option>
                    <option value="es-CL">Chile</option>
                    <option value="es-CO">Colombia</option>
                    <option value="es-CR">Costa Rica</option>
                    <option value="es-EC">Ecuador</option>
                    <option value="es-SV">El Salvador</option>
                    <option value="es-ES">España</option>
                    <option value="es-US">Estados Unidos</option>
                    <option value="es-GT">Guatemala</option>
                    <option value="es-HN">Honduras</option>
                    <option value="es-MX">México</option>
                    <option value="es-NI">Nicaragua</option>
                    <option value="es-PA">Panamá</option>
                    <option value="es-PY">Paraguay</option>
                    <option value="es-PE">Perú</option>
                    <option value="es-PR">Puerto Rico</option>
                    <option value="es-DO">República Dominicana</option>
                    <option value="es-UY">Uruguay</option>
                    <option value="es-VE">Venezuela</option>
                  </optgroup>
                  <option value="eu-ES">Euskara</option>
                  <option value="fil-PH">Filipino</option>
                  <option value="fr-FR">Français</option>
                  <option value="gl-ES">Galego</option>
                  <option value="hi-IN">हिन्दी</option>
                  <option value="hr_HR">Hrvatski</option>
                  <option value="zu-ZA">IsiZulu</option>
                  <option value="is-IS">Íslenska</option>
                  <optgroup label="Italiano">
                    <option value="it-IT">Italia</option>
                    <option value="it-CH">Svizzera</option>
                  </optgroup>
                  <option value="lt-LT">Lietuvių</option>
                  <option value="hu-HU">Magyar</option>
                  <option value="nl-NL">Nederlands</option>
                  <option value="nb-NO">Norsk bokmål</option>
                  <option value="pl-PL">Polski</option>
                  <optgroup label="Português">
                    <option value="pt-BR">Brasil</option>
                    <option value="pt-PT">Portugal</option>
                  </optgroup>
                  <option value="ro-RO">Română</option>
                  <option value="sl-SI">Slovenščina</option>
                  <option value="sk-SK">Slovenčina</option>
                  <option value="fi-FI">Suomi</option>
                  <option value="sv-SE">Svenska</option>
                  <option value="vi-VN">Tiếng Việt</option>
                  <option value="th-TH">ภาษาไทย</option>
                  <option value="tr-TR">Türkçe</option>
                  <option value="el-GR">Ελληνικά</option>
                  <option value="bg-BG">български</option>
                  <option value="ru-RU">Pусский</option>
                  <option value="sr-RS">Српски</option>
                  <option value="uk-UA">Українська</option>
                  <option value="ko-KR">한국어</option>
                  <optgroup label="中文">
                    <option value="cmn-Hans-CN">普通话 (中国大陆)</option>
                    <option value="cmn-Hans-HK">普通话 (香港)</option>
                    <option value="cmn-Hant-TW">中文 (台灣)</option>
                    <option value="yue-Hant-HK">粵語 (香港)</option>
                  </optgroup>
                  <option value="ja-JP">日本語</option>
                </select>
              </span>
            </div>
          </Col> */}
          {/* NOTES TAKER */}
          {/* <Col>
            <div>

                <h1>Voice Controlled Notes App</h1>
                <p className="page-description">A tiny app that allows you to take notes by recording your voice</p>
                <p><a className="tz-link" href="https://tutorialzine.com/2017/08/converting-from-speech-to-text-with-javascript">Read the full article on Tutorialzine »</a></p>

                <h3 className="no-browser-support">Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>

                <div className="app">
                    <h3>Add New Note</h3>
                    <div className="input-single">
                        <textarea id="note-textarea" placeholder="Create a new note by typing or using voice recognition." rows="6"></textarea>
                    </div>
                    <button id="start-record-btn" title="Start Recording">Start Recognition</button>
                    <button id="pause-record-btn" title="Pause Recording">Pause Recognition</button>
                    <button id="save-note-btn" title="Save Note">Save Note</button>
                    <p id="recording-instructions">Press the <strong>Start Recognition</strong> button and allow access.</p>

                    <h3>My Notes</h3>
                    <ul id="notes">
                        <li>
                            <p className="no-notes">You don't have any notes.</p>
                        </li>
                    </ul>

                </div>

            </div>
          </Col> */}
        </Row>
      </Grid>

    );
  }
}

export default SpeechTranscription;
