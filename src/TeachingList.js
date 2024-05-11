import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TeachingList = ({ teachings }) => {

    const[currTeachings,setCurrTeachings] = useState(teachings)
    useEffect(() => {
        setCurrTeachings(teachings);
    }, [teachings]);
  
    return (
        <div className="teaching-list">
            {currTeachings.map(teaching => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={teaching.id}>
                      <Link to={`/donor/teaching/${teaching.id}`} className="no-underline">
                          <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{teaching.title}</h2>
                      </Link>
                </div>
            ))}
        </div>
      );
}
   
  export default TeachingList;