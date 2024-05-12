import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MedEquipList = ({ medEquips }) => {

    const[currMedEquips,setCurrMedEquips] = useState(medEquips)
    useEffect(() => {
        setCurrMedEquips(medEquips);
    }, [medEquips]);

    return (
      <div className="donor-use-req-list">
          {currMedEquips.map(medEquip => (
              <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={medEquip.id}>
                    <Link to={`/donor/medEquip/${medEquip.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ medEquip.type }</h2>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{medEquip.use}</p>
                    </Link>
              </div>
          ))}
      </div>
    );
}

export default MedEquipList;