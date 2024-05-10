import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';

const BloodList = ({ bloods }) => {

    const[currBloods,setCurrBloods] = useState(bloods)
    useEffect(() => {
        setCurrBloods(bloods);
    }, [bloods]);

    return (
      <div className="donor-use-req-list">
          {currBloods.map(blood => (
              <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={blood.id}>
                    <Link to={`/bloods/${blood.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{blood.hospital_name}</h2>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{blood.governorate}</p>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{blood.hospital_area}</p>
                    </Link>
              </div>
          ))}
      </div>
    );
}

export default BloodList;