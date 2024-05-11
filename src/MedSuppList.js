import { Link } from 'react-router-dom';

const MedSuppList = ({ medSupps }) => {
  
    return (
      <div className="medSupp-list">
          {medications.map(medication => (
              <div className="links" key={medication.id}>
                    <Link to={`/medications/${medication.id}`}>
                        <h2>{ medication.name }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default MedSuppList;