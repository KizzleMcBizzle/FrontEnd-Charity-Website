import { Link } from 'react-router-dom';

const DonationList = ({ donations, title}) => {
  
    return (
      <div className="donation-list">
          <h2>{title}</h2>
          {donations.map(donation => (
              <div className="donation-preview" key={donation.id}>
                    <Link to={`/${donation.name}`}>
                        <h2>{ donation.title }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default DonationList;