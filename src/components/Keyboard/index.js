import './styles.scss'

import { Row } from 'react-bootstrap'

import { ReactComponent as BackspaceIcon } from '../../assets/svg/backspace.svg';

export default function Keyboard() {
  return (
    <div id="keyboard">
      <Row className="row-1">
        <button className="button">q</button>
        <button className="button">w</button>
        <button className="button">e</button>
        <button className="button">r</button>
        <button className="button">t</button>
        <button className="button">y</button>
        <button className="button">u</button>
        <button className="button">i</button>
        <button className="button">o</button>
        <button className="button">p</button>
      </Row>
      <Row className="row-2">
        <button className="button">a</button>
        <button className="button">s</button>
        <button className="button">d</button>
        <button className="button">f</button>
        <button className="button">g</button>
        <button className="button">h</button>
        <button className="button">j</button>
        <button className="button">k</button>
        <button className="button">l</button>
      </Row>
      <Row className="row-3">
        <button className="button">Enter</button>
        <button className="button">z</button>
        <button className="button">x</button>
        <button className="button">c</button>
        <button className="button">v</button>
        <button className="button">b</button>
        <button className="button">n</button>
        <button className="button">m</button>
        <button className="button"><BackspaceIcon /></button>
      </Row>
    </div>
  )
}