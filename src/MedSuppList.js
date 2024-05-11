import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const MedSuppList = ({ medSupps }) => {

    const[currMedSupps,setCurrMedSupps] = useState(medSupps)
    useEffect(() => {
        setCurrMedSupps(medSupps);
    }, [medSupps]);
  
    return (
      <div className="medSupp-list">
          {currMedSupps.map(medSupp => (
              <div className="links" key={medSupp.id}>
                    <Link to={`/medSupps/${medSupp.id}`}>
                        <h2>{ medSupp.name }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default MedSuppList;