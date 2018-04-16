import React from 'react';

const andGate = (props) => (
  <form onChange={props.formChangedHandler} onSubmit={props.predictOutput}>
    <label htmlFor="firstInput">First Input: </label>
    <select name="firstInput" value={props.firstInput}>
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
    <br />
    <label htmlFor="secondInput">Second Input: </label>
    <select name="secondInput" value={props.secondInput}>
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
    <br />
    <input type="text" name="predictedOutput" placeholder="Predicted Output" value={props.predictedOutput} readOnly />
          <br />
    <button>Train</button>
    <h2>Config:</h2>
    <label htmlFor="epochs">Epochs: </label>
    <input type="number" name="epochs" placeholder="Epochs" min="0" max="10000" value={props.epochs} />
    <br />
    <label htmlFor="learningRate">Learning Rate: </label>
    <input type="number" name="learningRate" placeholder="Learning Rate" step="0.01" value={props.learningRate} />
  </form>
);

export default andGate;
