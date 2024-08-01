import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../App.css';


const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} className='Chartbox'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Medals" stroke="#000000" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
