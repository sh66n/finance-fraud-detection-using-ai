'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Helper function to generate random data within a specified range
const generateData = (count, { min, max }) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
};

const ApexChart = () => {
  const [state, setState] = React.useState({
    // Define series for the heatmap with 9 metrics, each having 18 random values
    series: [
      { name: 'Metric1', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric2', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric3', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric4', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric5', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric6', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric7', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric8', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Metric9', data: generateData(18, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        height: "60vh",
        width: '100%', // Make the chart take full width of the parent container
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false, // Disable data labels on the heatmap
      },
      colors: ["#008FFB"], // Single color for all metrics
      title: {
        text: 'HeatMap Chart (Single color)',
      },
      xaxis: {
        type: 'category',
        categories: [
          '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30',
          '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30',
          '06:00', '06:30'
        ], // Time intervals for x-axis
      },
      yaxis: {
        title: {
          text: 'Metrics',
        },
      },
    },
  });

  return (
    <div style={{ width: '100%' }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="heatmap"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
