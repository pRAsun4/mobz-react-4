import { useState } from 'react'
import InitialData from './Components/InitialData';
import './App.css'

function App() {
  const [data] = useState(InitialData);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortKey, setSortKey] = useState(null);
  const [filter, setFilter] = useState('');



  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };


  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = typeof a[sortKey] === 'string' ? a[sortKey].toLowerCase() : a[sortKey];
    const bValue = typeof b[sortKey] === 'string' ? b[sortKey].toLowerCase() : b[sortKey];

    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return bValue < aValue ? -1 : 1;
    }
  });



  return (
    <>
      <div className='container-fluid  d-flex flex-column align-items-center justify-content-center  '>
        <div className=''>
          <h3 className="text ">
            DATA GRID
          </h3>
          <br />
        </div>
        <div className="container border">
          <table className='table table-hover'>
            <thead>
              <tr>
                <th className='d-flex' scope='col' onClick={() => handleSort('id')}>
                  ID
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('name')}>Name
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('lastSeen')}>Last Seen
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('order')}>Order
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('totalSpend')}>Total Spend
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('latestPurchase')}>Latest Purchase
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('news')}>News
                  <i className="bi bi-arrow-down " ></i>
                </th>
                <th scope='col' onClick={() => handleSort('segment')}>Segment
                  <i className="bi bi-arrow-down " ></i>
                </th>
              </tr>
            </thead>
            <tbody className='overflow-auto' style={{ height: '90vh' }}>
              {sortedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.lastSeen}</td>
                  <td>{item.order}</td>
                  <td>{item.totalSpend}</td>
                  <td>{item.latestPurchase}</td>
                  <td>{item.news}</td>
                  <td>{item.segment}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </>
  )
}

export default App
