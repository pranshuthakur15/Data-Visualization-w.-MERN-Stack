import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Likelihood',
        data: data.map(item => item.likelihood),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Relevance',
        data: data.map(item => item.relevance),
        borderColor: 'rgba(255,159,64,1)',
        fill: false,
      }
    ]
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;