import { Link } from 'react-router-dom';

const MedSuppList = ({ medSupps }) => {
  
    return (
      <div className="medSupp-list">
          {medSupps.map(medSupp => (
              <div className="links" key={medSupp.id}>
                    <Link to={`/medSupps/${medSupp.id}`}>
                        <h2>{ medSupp.type }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default MedSuppList;