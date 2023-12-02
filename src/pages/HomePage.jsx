import { Link } from 'react-router-dom';
function HomePage({ companiesData }) {
  console.log(companiesData);
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='companies-container'>
        {companiesData.map(company => {
          return (
            <Link to={`/company/${company.name}`} className='company-card' key={company.id}>
              <h3>{company.name}</h3>
              <img className='company-logo' src={company.logo} alt={`${company.name} logo`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
