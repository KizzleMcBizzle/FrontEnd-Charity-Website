import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const MedicationDetails = () => {
  const { id } = useParams();
  const { data: medication, error, isPending } = useFetch('http://localhost:4000/medication/' + id);

  const navigate = useNavigate();

  const [quantity,setQuantity] = useState(1);

  return (
    <div className="donor-details bg-white shadow overflow-hidden sm:rounded-lg mx-4 my-4 p-4">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { medication && (<>
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Medication Details</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Details of the medication.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Medication Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ medication.name }</dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Use</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ medication.use }</dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Disease</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ medication.disease }</dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ medication.quantity }</dd>
              </div>
            </dl>
          </div>  
        </div>


<div className="flex items-center space-x-4 mt-3">
<div>
    <h4 className="font-medium text-gray-900">Quantity to be donated</h4>
    <div className="relative">
        <input
            type="range"
            min="1"
            max={medication.quantity}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="green-thumb-slider slider appearance-none w-64 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-inner cursor-pointer"
            style={{'WebkitAppearance': 'none'}}
        />
        <div
            className="absolute left-0 top-0 h-1 w-full rounded-full"
            style={{width: `${quantity * 5}%`}}></div>
    </div>
    <p className="text-gray-900">{quantity}</p>
</div>
<button onClick={() => navigate('/donor/booking')}
        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Donate
</button>
</div>
        </>
      )}
    </div>
  );
}

export default MedicationDetails;