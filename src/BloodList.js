import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';

const BloodList = ({ bloods }) => {

    const[currBloods,setCurrBloods] = useState(bloods)
    useEffect(() => {
        setCurrBloods(bloods);
    }, [bloods]);
  
    return (
      <div className="blood-list">
          {currBloods.map(blood => (
              <div className="links" key={blood.id}>
                    <Link to={`/bloods/${blood.id}`}>
                        <h2>{blood.hospital_name}</h2>
                     </Link>
                     <p>{blood.governorate}</p>
                     <p>{blood.hospital_area}</p>
              </div>
          ))}
      </div>
    );
}
   
  export default BloodList;