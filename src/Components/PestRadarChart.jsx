// frontend/src/components/PestRadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const PestRadarChart = ({ data }) => {
  const pestle = ['Political', 'Economic', 'Social', 'Technological'];
  const pestleCounts = pestle.map(type => 
    data.filter(item => item.pestle === type).length
  );

  const chartData = {
    labels: pestle,
    datasets: [
      {
        label: 'PEST Analysis',
        data: pestleCounts,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <h2>PEST Analysis</h2>
      <Radar data={chartData} />
    </div>
  );
};

export default PestRadarChart;