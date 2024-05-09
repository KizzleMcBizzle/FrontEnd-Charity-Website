import { Link } from 'react-router-dom';

const MedCaseList = ({ medCases }) => {
  
    return (
      <div className="medCase-list">
          {medCases.map(medCase => (
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