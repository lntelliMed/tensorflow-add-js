import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class LossChart extends Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    this.state = {
      options: {
        title: 'Epoch vs. Loss comparison',
        hAxis: { title: 'Epoch', minValue: 0, maxValue: props.epochs },
        vAxis: { title: 'Loss', minValue: 0, maxValue: 0.1 },
        legend: 'none',
        explorer: {
          actions: ['dragToZoom', 'rightClickToReset'],
          axis: 'vertical',
          keepInBounds: true,
          maxZoomIn: 4.0
        },
        colors: ['#D44E41'],
        animation: {
          duration: 1000,
          easing: 'out'
        },
        theme: 'material'
      },
      // rows: [
      //   [0, 0]
      // ],
      columns: [
        {
          type: 'number',
          label: 'Epoch',
        },
        {
          type: 'number',
          label: 'Loss',
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="LineChart"
        rows={this.props.lossArray}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="LineChart"
        width="70%"
        height="400px"
        chartEvents={this.chartEvents}
      />
    );
  }
}
export default LossChart;
