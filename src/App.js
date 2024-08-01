import React, { useState, useEffect } from 'react';
import Header from './Header';
import Table from './Table';
import Chart from './Chart';
import './App.css';
import JsonData from './data.json';

const App = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    setData(JsonData);
  }, []);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="App">
      <Header />
      <button className="toggle-button" onClick={toggleView}>
        {showTable ? 'Show Chart' : 'Show Table'}
      </button>
      {showTable ? <Table data={data} /> : <Chart data={data} />}
    </div>
  );
};

export default App;
