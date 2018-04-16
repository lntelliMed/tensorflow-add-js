import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';

import './App.css';
import logo from './logo.svg';
import AndGate from './AndGate';

class App extends Component {
  state = {
    firstInput: 1,
    secondInput: 1,
    epochs: 1000,
    learningRate: 0.05,
    predictedOutput: ''
  }

  predictOutput = (event) => {
    event.preventDefault();

    const firstInput = this.state.firstInput;
    const secondInput = this.state.secondInput;
    const epochs = this.state.epochs;
    const learningRate = this.state.learningRate;


    const xs = tf.tensor2d([[1, 1, 1], [1, 0, 1], [0, 1, 1], [0, 0, 1]]);
    const ys = tf.tensor2d([[1], [0], [0], [0]]);
    const w = tf.variable(tf.randomNormal([3, 1], 0, 0.1, 'float32', 12))
    const f = x => tf.relu(tf.matMul(x, w))
    const loss = (output, y) => output.sub(y).square().mean();

    const optimizer = tf.train.sgd(learningRate)
    for (let i = 0; i < this.state.epochs; i++) {
      optimizer.minimize(() => {
        let currentLoss = loss(f(xs), ys);
        currentLoss.print();
        return currentLoss;
      });
    }
    const userInput = tf.tensor2d([[firstInput, secondInput, 1]]);
    const pred = f(userInput).dataSync();
    this.setState({ predictedOutput: Number(pred).toFixed(6)});
  }

  formChangedHandler = (event) => {
    if (event.target.name === 'firstInput') {
      this.setState({ firstInput: +event.target.value});
    } else if (event.target.name === 'secondInput') {
      this.setState({ secondInput: +event.target.value });
    } else if (event.target.name === 'epochs') {
      this.setState({ epochs: +event.target.value });
    } else if (event.target.name === 'learningRate') {
      this.setState({ learningRate: +event.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AND Gate - TensorFlow.js</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, click on the Train Model button.
        </p>
        <AndGate
          formChangedHandler={this.formChangedHandler}
          predictOutput={this.predictOutput}
          firstInput={this.state.firstInput}
          secondInput={this.state.secondInput}
          epochs={this.state.epochs}
          learningRate={this.state.learningRate}
          predictedOutput={this.state.predictedOutput} />
      </div>
    );
  }
}

export default App;
