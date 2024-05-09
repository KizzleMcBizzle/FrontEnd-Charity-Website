import { Link } from 'react-router-dom';

const MedicationList = ({ medications }) => {
  
    return (
      <div className="medication-list">
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
   
  export default MedicationList;