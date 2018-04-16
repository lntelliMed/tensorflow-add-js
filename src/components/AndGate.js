import React from 'react';
import './AndGate.css';

const andGate = (props) => (
  <form className="AndGate-form" onChange={props.formChangedHandler} onSubmit={props.predictOutput}>
    <h2>Train</h2>
    <div className="AndGate-input">
      <label htmlFor="firstInput">First Input: </label>
      <select name="firstInput" value={props.firstInput}>
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </div>
    <div className="AndGate-input">
      <label htmlFor="secondInput">Second Input: </label>
      <select name="secondInput" value={props.secondInput}>
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </div>
    <div className="AndGate-input">
      <input type="text" name="predictedOutput" size="10" placeholder="Predicted Output" value={props.predictedOutput} readOnly />
      <button>Train Model</button>
    </div>
    <h2>Configure</h2>
    <div className="AndGate-input">
      <label htmlFor="epochs">Epochs: </label>
      <input type="number" name="epochs" placeholder="Epochs" min="0" max="10000" value={props.epochs} />
    </div>
    <div className="AndGate-input">
      <label htmlFor="learningRate">Learning Rate: </label>
      <input type="number" name="learningRate" placeholder="Learning Rate" step="0.01" value={props.learningRate} />
    </div>
  </form>
);

export default andGate;
