import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="medals-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.Id}>
            <td>{item.Year}</td>
            <td>{item.Medals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
