import { Link } from 'react-router-dom';

const MedSuppList = ({ medSupps }) => {
  
    return (
      <div className="medSupp-list">
          {medSupps.map(medSupp => (
              <div className="links" key={medSupp.id}>
                    <Link to={`/medications/${medSupp.id}`}>
                        <h2>{ medSupp.name }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default MedSuppList;