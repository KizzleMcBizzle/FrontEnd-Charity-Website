import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';

const MedCaseList = ({ medCases }) => {

    const[currMedCases,setCurrCases] = useState(medCases)
    useEffect(() => {
        setCurrCases(medCases);
    }, [medCases]);
  
    return (
      <div className="medCase-list">
          {currMedCases.map(medCase => (
              <div className="links" key={medCase.id}>
                    <Link to={`/medCases/${medCase.id}`}>
                        <h2>{ medCase.patientName }</h2>
                     </Link>
                     <p>{medCase.age}</p>
                     <p>{medCase.gender}</p>
              </div>
          ))}
      </div>
    );
}
   
  export default MedCaseList;