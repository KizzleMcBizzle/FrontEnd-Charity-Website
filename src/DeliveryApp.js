import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

const DeliveryApp = () => {
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const { error, isPending, data: pickup_req } = useFetch('http://localhost:4000/pickup_req');

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
      alert(`Confirmed delivery request for ${selectedRequest.location} on ${selectedRequest.date} at ${selectedRequest.time}`);
    } else {
      alert('Please select a delivery request.');
    }
  };

  return (
    <div className="bg-f0f0f0 rounded-10 shadow-lg p-40 mx-auto max-w-800">
      <h1 className="mb-30 text-36 color-333">Delivery Requests</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {deliveryRequests.map(request => (
          <li key={request.id} 
              onClick={() => handleSelectRequest(request)}
              className={`bg-white p-20 rounded-8 shadow-md transition-transform duration-200 cursor-pointer ${selectedRequest?.id === request.id ? 'transform translate-y-1' : 'hover:translate-y-0.5'}`}>
            <strong>Date:</strong> {request.date}, <strong>Time:</strong> {request.time} <br />
            <strong>Location:</strong> {request.location}
          </li>
        ))}
      </ul>
      <button className="bg-2196f3 text-white bg-custom-green p-10 md:p-15 rounded-5 md:rounded-full text-16 md:text-20 mt-40 hover:bg-45a049 transition duration-300" onClick={handleConfirmSelection}>Confirm Selection</button>
    </div>
  );
}

export default DeliveryApp;
