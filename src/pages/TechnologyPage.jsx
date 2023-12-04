import { Link, useParams } from 'react-router-dom';

function TechnologyPage({ technologiesData }) {
  const { slug, returnToCompany } = useParams();
  console.log('slug', slug);
  const techInfo = technologiesData.find(tech => tech.slug === slug);
  console.log('techInfo', techInfo);
  return (
    <div>
      <h1>Technology Details</h1>
      {!techInfo && <h3>No Company was found :(</h3>}
      {techInfo && (
        <div className='company-info-card'>
          <img className='company-info-card-logo' src={techInfo.image} alt={techInfo.name}></img>
          <div className='company-about'>
            <h4>{techInfo.name}</h4>
            <h5>About</h5>
            <p>{techInfo.description}</p>
          </div>
        </div>
      )}
      <Link to={`/company/${returnToCompany}`} className='return-to-company'>
        Back to {returnToCompany}
      </Link>
    </div>
  );
}

export default TechnologyPage;
