import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';

const MedCaseList = ({ medCases }) => {

    const[currMedCases,setCurrCases] = useState(medCases)
    useEffect(() => {
        setCurrCases(medCases);
    }, [medCases]);

    return (
      <div className="donor-use-req-list">
          {currMedCases.map(medCase => (
              <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={medCase.id}>
                    <Link to={`/medCases/${medCase.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ medCase.patientName }</h2>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{medCase.medicalSpecialty}</p>
                    </Link>
              </div>
          ))}
      </div>
    );
}

export default MedCaseList;