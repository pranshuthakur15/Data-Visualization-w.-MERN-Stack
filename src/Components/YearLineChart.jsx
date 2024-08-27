// frontend/src/components/YearLineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const YearLineChart = ({ data }) => {
  const years = data.map(item => item.published.split(', ')[1]);
  const uniqueYears = [...new Set(years)].sort();

  const yearCounts = uniqueYears.map(year => 
    years.filter(y => y === year).length
  );

  const chartData = {
    labels: uniqueYears,
    datasets: [
      {
        label: 'Yearly Trends',
        data: yearCounts,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Yearly Trends</h2>
      <Line data={chartData} />
    </div>
  );
};

export default YearLineChart;