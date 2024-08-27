// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/data')
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Data Visualization Dashboard</h1>
//       <Dashboard data={data} />
//     </div>
//   );
// };

// export default App;

// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/data')
      .then(response => {
        console.log('Fetched data:', response.data); // Log the fetched data
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      <Dashboard data={data} />
    </div>
  );
};

export default App;
