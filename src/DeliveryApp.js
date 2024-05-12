import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const DeliveryApp = () => {
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const { error, isPending, data: pickup_req } = useFetch('http://localhost:4000/pickup_req');
  const navigate = useNavigate();
  useEffect(() => {
    if (pickup_req) {
      setDeliveryRequests(pickup_req);
    }
  }, [pickup_req]);

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
  };

  const handleConfirmSelection = () => {
    if (selectedRequest) {
      setTimeout(() => {alert(`Confirmed delivery request for ${selectedRequest.location} on ${selectedRequest.date} at ${selectedRequest.time}`);
                        navigate(-1);}, 1000   );
    } else {
      alert('Please select a delivery request.');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Delivery Requests
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <ul className="grid grid-cols-1 gap-10">
          {deliveryRequests.map(request => (
            <li key={request.id}
                onClick={() => handleSelectRequest(request)}
                className={`bg-gray-50 p-4 rounded-8 shadow-md transition-transform duration-200 cursor-pointer ${selectedRequest?.id === request.id ? 'transform translate-y-1' : 'hover:translate-y-0.5'}`}>
              <strong>Date:</strong> {request.date}, <strong>Time:</strong> {request.time} <br />
              <strong>Location:</strong> {request.location}
            </li>
          ))}
        </ul>
        <div>
          <button
              type="submit"
              className="flex w-full justify-center rounded-md mt-4 bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 ease-in-out hover:scale-105"
              onClick={handleConfirmSelection}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryApp;