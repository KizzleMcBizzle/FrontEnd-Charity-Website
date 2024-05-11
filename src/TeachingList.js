import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const TeachingList = ({ teachings }) => {

    const[currTeachings,setCurrTeachings] = useState(teachings)
    useEffect(() => {
        setCurrTeachings(teachings);
    }, [teachings]);
  
    return (
      <div className="teaching-list">
          {currTeachings.map(teaching => (
              <div className="links" key={teaching.id}>
                    <Link to={`/teachings/${teaching.id}`}>
                        <h2>{ teaching.title }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default TeachingList;