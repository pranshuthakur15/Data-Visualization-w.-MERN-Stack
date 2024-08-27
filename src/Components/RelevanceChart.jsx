// frontend/src/components/RelevanceChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RelevanceChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.country),
    datasets: [
      {
        label: 'Relevance',
        data: data.map(item => item.relevance),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Relevance Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default RelevanceChart;