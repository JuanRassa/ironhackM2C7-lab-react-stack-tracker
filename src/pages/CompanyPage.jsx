import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companiesData }) {
  const { companySlug } = useParams();

  const companyInfo = companiesData.find(company => company.name === companySlug);
  console.log(companyInfo);
  return (
    <div>
      <Link className='go-back-btn' to='/'>
        ← Home
      </Link>
      <h1>Company Profile</h1>
      <div className='company-container'>
        {!companyInfo && <h3>No Company was found :(</h3>}
        {companyInfo && (
          <>
            <div className='company-info-card'>
              <img className='company-info-card-logo' src={companyInfo.logo} alt={companyInfo.name}></img>
              <div className='company-about'>
                <h4>{companyInfo.name}</h4>
                <h5>About</h5>
                <p>{companyInfo.description}</p>
              </div>
            </div>
            <div className='company-stack-container'>
              <div className='company-stack-wrapper '>
                {companyInfo.techStack.map(stack => {
                  return (
                    <Link to={`/tech/${stack.slug}/${companyInfo.name}`} className='company-stack-link' key={stack.name}>
                      <div className='company-stack-image-container'>
                        <img src={stack.image} alt={stack.name} />
                      </div>
                      <h4 className='company-stack-name'>{stack.name}</h4>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CompanyPage;
