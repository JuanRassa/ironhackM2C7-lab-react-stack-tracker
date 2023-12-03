import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companiesData }) {
  const { companySlug } = useParams();

  const companyInfo = companiesData.find(company => company.name === companySlug);

  return (
    <div>
      <Link className='go-back-btn' to='/'>
        ← Go Back
      </Link>
      <h1>Company Profile</h1>
      <div className='company-container'>
        {!companyInfo && <h3>No Company was found :(</h3>}
        {companyInfo && (
          <div className='company-info-card'>
            <img className='company-info-card-logo' src={companyInfo.logo} alt={companyInfo.name}></img>
            <div className='company-about'>
              <h4>{companyInfo.name}</h4>
              <h5>About</h5>
              <p>{companyInfo.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyPage;
