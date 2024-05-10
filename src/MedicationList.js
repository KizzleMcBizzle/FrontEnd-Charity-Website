import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MedicationList = ({ medications }) => {

    const[currMedications,setCurrMedications] = useState(medications)
    useEffect(() => {
        setCurrMedications(medications);
    }, [medications]);
  
    return (
      <div className="medication-list">
          {currMedications.map(medication => (
              <div className="links" key={medication.id}>
                    <Link to={`/medications/${medication.id}`}>
                        <h2>{ medication.name }</h2>
                     </Link>
                     <p>{medication.disease}</p>
              </div>
          ))}
      </div>
    );
}
   
  export default MedicationList;