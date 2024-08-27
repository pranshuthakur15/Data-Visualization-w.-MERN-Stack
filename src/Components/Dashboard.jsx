import React, { useState } from 'react';
import IntensityChart from './IntensityChart';
import LikelihoodChart from './LikelihoodChart';
import RelevanceChart from './RelevanceChart';
import CountryPieChart from './CountryPieChart';
import YearLineChart from './YearLineChart';
import PestRadarChart from './PestRadarChart';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ data }) => {
  const [filters, setFilters] = useState({
    endYear: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    country: '',
    city: ''
  });

  const getUniqueValues = (key) => {
    return [...new Set(data.map(item => item[key]).filter(Boolean))]
      .sort((a, b) => (typeof a === 'string' ? a.localeCompare(b) : a - b));
  };

  const uniqueEndYears = getUniqueValues('end_year');
  const uniqueTopics = getUniqueValues('topic');
  const uniqueSectors = getUniqueValues('sector');
  const uniqueRegions = getUniqueValues('region');
  const uniquePestles = getUniqueValues('pestle');
  const uniqueSources = getUniqueValues('source');
  const uniqueCountries = getUniqueValues('country');
  const uniqueCities = getUniqueValues('city');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filteredData = data.filter((item) => {
    return (
      (!filters.endYear || item.end_year === filters.endYear) &&
      (!filters.topic || item.topic === filters.topic) &&
      (!filters.sector || item.sector === filters.sector) &&
      (!filters.region || item.region === filters.region) &&
      (!filters.pestle || item.pestle === filters.pestle) &&
      (!filters.source || item.source === filters.source) &&
      (!filters.country || item.country === filters.country) &&
      (!filters.city || item.city === filters.city)
    );
  });

  if (!data || data.length === 0) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="container">
      
      <div className="filters d-flex justify-content-center flex-wrap mb-4">
        <select className="form-select m-2" name="endYear" onChange={handleFilterChange}>
          <option value="">End Year</option>
          {uniqueEndYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select className="form-select m-2" name="topic" onChange={handleFilterChange}>
          <option value="">Topic</option>
          {uniqueTopics.map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
        <select className="form-select m-2" name="sector" onChange={handleFilterChange}>
          <option value="">Sector</option>
          {uniqueSectors.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
        <select className="form-select m-2" name="region" onChange={handleFilterChange}>
          <option value="">Region</option>
          {uniqueRegions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <select className="form-select m-2" name="pestle" onChange={handleFilterChange}>
          <option value="">PEST</option>
          {uniquePestles.map(pest => (
            <option key={pest} value={pest}>{pest}</option>
          ))}
        </select>
        <select className="form-select m-2" name="source" onChange={handleFilterChange}>
          <option value="">Source</option>
          {uniqueSources.map(source => (
            <option key={source} value={source}>{source}</option>
          ))}
        </select>
        <select className="form-select m-2" name="country" onChange={handleFilterChange}>
          <option value="">Country</option>
          {uniqueCountries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        <select className="form-select m-2" name="city" onChange={handleFilterChange}>
          <option value="">City</option>
          {uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              
              <IntensityChart data={filteredData} />
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <LikelihoodChart data={filteredData} />
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
             
              <RelevanceChart data={filteredData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
           
              <CountryPieChart data={filteredData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
       
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            
              <PestRadarChart data={filteredData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
             
              <YearLineChart data={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;