import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MedicationList = ({ medications }) => {

    const[currMedications,setCurrMedications] = useState(medications)
    useEffect(() => {
        setCurrMedications(medications);
    }, [medications]);

    return (
      <div className="donor-use-req-list">
          {currMedications.map(medication => (
              <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={medication.id}>
                    <Link to={`/medications/${medication.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ medication.name }</h2>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{medication.disease}</p>
                    </Link>
              </div>
          ))}
      </div>
    );
}

export default MedicationList;