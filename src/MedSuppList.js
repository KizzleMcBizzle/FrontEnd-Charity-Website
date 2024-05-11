import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MedSuppList = ({ medSupps }) => {

    const[currMedSupps,setCurrMedSupps] = useState(medSupps)
    useEffect(() => {
        setCurrMedSupps(medSupps);
    }, [medSupps]);

    return (
      <div className="medSupp-list">
          {currMedSupps.map(medSupp => (
              <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={medSupp.id}>
                    <Link to={`/donor/medSupp/${medSupp.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ medSupp.name }</h2>
                    </Link>
              </div>
          ))}
      </div>
    );
}

export default MedSuppList;