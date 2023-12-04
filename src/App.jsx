import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

import './App.css';
import companies from './companies.json';
import technologies from './technologies.json';

function App() {
  const [companiesData] = useState(companies);
  const [technologiesData] = useState(technologies);

  console.log('<()> App info: ', [companiesData, technologiesData]);
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companiesData={companiesData} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companiesData={companiesData} />} />
        <Route path='/tech/:slug/:returnToCompany' element={<TechnologyPage technologiesData={technologiesData} />} />
      </Routes>
    </div>
  );
}

export default App;
