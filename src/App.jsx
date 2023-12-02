import { useState } from 'react';

import './App.css';
import companies from './companies.json';
import technologies from './technologies.json';

function App() {
  const [companiesData, setCompaniesData] = useState(companies);
  const [technologiesData, setTechnologiesData] = useState(technologies);

  console.log('<()> App info: ', [companiesData, technologiesData]);
  return (
    <div className='App'>
      <h1>LAB | React Stack Tracker</h1>
    </div>
  );
}

export default App;
