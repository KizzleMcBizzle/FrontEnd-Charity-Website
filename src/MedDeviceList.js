import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MedDeviceList = ({ medDevices }) => {

    const[currMedDevices,setCurrMedDevices] = useState(medDevices)
    useEffect(() => {
        setCurrMedDevices(medDevices);
    }, [medDevices]);

    return (
      <div className="donor-use-req-list">
          {currMedDevices.map(medDevice => (
              <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key={medDevice.id}>
                    <Link to={`/donor/medDevices/${medDevice.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ medDevice.type }</h2>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{medDevice.use}</p>
                    </Link>
              </div>
          ))}
      </div>
    );
}

export default MedDeviceList;