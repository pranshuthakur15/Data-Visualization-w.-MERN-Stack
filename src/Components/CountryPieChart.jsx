// frontend/src/components/CountryPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CountryPieChart = ({ data }) => {
  const countries = data.map(item => item.country);
  const uniqueCountries = [...new Set(countries)];
  const countryCounts = uniqueCountries.map(country => 
    countries.filter(c => c === country).length
  );

  const chartData = {
    labels: uniqueCountries,
    datasets: [
      {
        label: 'Country Distribution',
        data: countryCounts,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ]
      }
    ]
  };

  return (
    <div>
      <h2>Country Distribution</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default CountryPieChart;