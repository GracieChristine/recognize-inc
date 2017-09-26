import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Well
} from 'react-bootstrap';

import {showIt} from './helpers/Translation';

import './TextTranslation.css';

class TextTranslation extends Component {

  render() {

    return (

      <Grid>
        <Row className="translational">
          <Col sm={6} md={6} className="translationalForm">
            <div className="text-translation-initial">
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Translate Text From English</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="The text will pass down from the transcription or simply type something out..." id="text" cols="45" rows="10"/>
                </FormGroup>
              </form>
              <div className="processingText">
                <form>
                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel className="targetLabel">to</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" id="target" className="targetLang">
                      <option value="select">select</option>
                      <option value="other">...</option>
                      <optgroup label="Afrikaans">
                        <option value="af">South Africa</option>
                      </optgroup>
                      <optgroup label="العربية">
                        <option value="ar">Algeria</option>
                        <option value="ar">Bahrain</option>
                        <option value="ar">Egypt</option>
                        <option value="ar">Iraq</option>
                        <option value="ar">Israel</option>
                        <option value="ar">Jordan</option>
                        <option value="ar">Kuwait</option>
                        <option value="ar">Lebanon</option>
                        <option value="ar">Morocco</option>
                        <option value="ar">Oman</option>
                        <option value="ar">Qatar</option>
                        <option value="ar">Saudi Arabia</option>
                        <option value="ar">State of Palestine</option>
                        <option value="ar">Tunisia</option>
                        <option value="ar">United Arab Emirates</option>
                      </optgroup>
                      <optgroup label="Euskara">
                        <option value="eu">Espainia</option>
                      </optgroup>
                      <optgroup label="Български">
                        <option value="bg">България</option>
                      </optgroup>
                      <optgroup label="Català">
                        <option value="ca">Espanya</option>
                      </optgroup>
                      <optgroup label="中文">
                        <option value="zh">廣東話</option>
                        <option value="zh">普通话 (中国大陆)</option>
                        <option value="zh">普通話 (香港)</option>
                        <option value="zh">國語</option>
                      </optgroup>
                      <optgroup label="Hrvatski">
                        <option value="hr">Hrvatska</option>
                      </optgroup>
                      <optgroup label="Čeština">
                        <option value="cs">Česká republika</option>
                      </optgroup>
                      <optgroup label="Dansk">
                        <option value="da">Denmark</option>
                      </optgroup>
                      <optgroup label="Nederlands">
                        <option value="nl">Netherland</option>
                      </optgroup>
                      <optgroup label="English">
                        <option value="en">Australia</option>
                        <option value="en">Canada</option>
                        <option value="en">India</option>
                        <option value="en">Ireland</option>
                        <option value="en">New Zealand</option>
                        <option value="en">Philippines</option>
                        <option value="en">South Africa</option>
                        <option value="en">United Kingdom</option>
                        <option value="en" selected>United States</option>
                      </optgroup>
                      <optgroup label="Filipino">
                        <option value="fil">(Pilipinas)</option>
                      </optgroup>
                      <optgroup label="Suomi">
                        <option value="fi">Suomi</option>
                      </optgroup>
                      <optgroup label="Français">
                        <option value="fr">Canada</option>
                        <option value="fr">France</option>
                      </optgroup>
                      <optgroup label="Galego">
                        <option value="gl">España</option>
                      </optgroup>
                      <optgroup label="Deutsch">
                        <option value="de">Deutschland</option>
                      </optgroup>
                      <optgroup label="Ελληνικά">
                        <option value="el">Ελλάδα</option>
                      </optgroup>
                      <optgroup label="Hebrew">
                        <option value="he">Israel</option>
                      </optgroup>
                      <optgroup label="हिन्दी">
                        <option value="hi">भारत</option>
                      </optgroup>
                      <optgroup label="Magyar">
                        <option value="hu">Magyarország</option>
                      </optgroup>
                      <optgroup label="Íslenska">
                        <option value="is">Ísland</option>
                      </optgroup>
                      <optgroup label="Bahasa Indonesia">
                        <option value="id">Indonesia</option>
                      </optgroup>
                      <optgroup label="Italiano">
                        <option value="it">Italia</option>
                      </optgroup>
                      <optgroup label="日語">
                        <option value="ja">日本</option>
                      </optgroup>
                      <optgroup label="한국어">
                        <option value="ko">대한민국</option>
                      </optgroup>
                      <optgroup label="Lietuvių">
                        <option value="It">Lietuva</option>
                      </optgroup>
                      <optgroup label="Bahasa Melayu">
                        <option value="ms">Malaysia</option>
                      </optgroup>
                      <optgroup label="Norwegian Bokmål ">
                        <option value="nb">Norway</option>
                      </optgroup>
                      <optgroup label="Persian">
                        <option value="fa">Iran</option>
                      </optgroup>
                      <optgroup label="Polski">
                        <option value="pl">Poland</option>
                      </optgroup>
                      <optgroup label="Português">
                        <option value="pt">Brazil</option>
                        <option value="pt">Portugal</option>
                      </optgroup>
                      <optgroup label="Română">
                        <option value="ro">România</option>
                      </optgroup>
                      <optgroup label="Русский">
                        <option value="ru">Россия</option>
                      </optgroup>
                      <optgroup label="Српски">
                        <option value="sr">Србија</option>
                      </optgroup>
                      <optgroup label="Slovenčina">
                        <option value="sk">Slovakia</option>
                      </optgroup>
                      <optgroup label="Slovenščina">
                        <option value="sl">Slovenia</option>
                      </optgroup>
                      <optgroup label="Español">
                        <option value="es">Argentina</option>
                        <option value="es">Bolivia</option>
                        <option value="es">Chile</option>
                        <option value="es">Colombia</option>
                        <option value="es">Costa Rica</option>
                        <option value="es">República Dominicana</option>
                        <option value="es">Ecuador</option>
                        <option value="es">El Salvador</option>
                        <option value="es">Guatemala</option>
                        <option value="es">Honduras</option>
                        <option value="es">México</option>
                        <option value="es">Nicaragua</option>
                        <option value="es">Panamá</option>
                        <option value="es">Paraguay</option>
                        <option value="es">Perú</option>
                        <option value="es">Puerto Rico</option>
                        <option value="es">España</option>
                        <option value="es">Estados Unidos</option>
                        <option value="es">Uruguay</option>
                        <option value="es">Venezuela</option>
                      </optgroup>
                      <optgroup label="Svenska">
                        <option value="sv">Sweden</option>
                      </optgroup>
                      <optgroup label="ไทย">
                        <option value="th">ประเทศไท</option>
                      </optgroup>
                      <optgroup label="Türkçe">
                        <option value="tr">Türkiye</option>
                      </optgroup>
                      <optgroup label="Українська">
                        <option value="uk">Україна</option>
                      </optgroup>
                      <optgroup label="Tiếng Việt">
                        <option value="vi">Việt Nam</option>
                      </optgroup>
                      <optgroup label="IsiZulu">
                        <option value="zu">South Africa</option>
                      </optgroup>
                    </FormControl>
                    <Button className="translateBtn" onClick={showIt}>Translate</Button>
                  </FormGroup>
                </form>
              </div>
            </div>
          </Col>
          <Col sm={6} md={6} className="translationalText">
            <div className="text-translation-final">
              <ControlLabel>Translated Text</ControlLabel>
              <Well id="translated">
              </Well>
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default TextTranslation;
