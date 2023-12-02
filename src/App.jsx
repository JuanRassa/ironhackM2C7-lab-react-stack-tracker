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
        <Route path='/' element={<HomePage />} />
        <Route path='/company/:companySlug' element={<CompanyPage />} />
        <Route path='/tech/:slug' element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
