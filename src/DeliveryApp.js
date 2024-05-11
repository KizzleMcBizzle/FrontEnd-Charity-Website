import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import './App.css'; 

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
    <div className="App">
      <h1>Delivery Requests</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul>
        {deliveryRequests.map(request => (
          <li key={request.id} 
              onClick={() => handleSelectRequest(request)}
              className={selectedRequest?.id === request.id ? 'selected' : ''}
              style={{cursor: 'pointer', padding: '20px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s, box-shadow 0.2s'}}>
            <strong>Date:</strong> {request.date}, <strong>Time:</strong> {request.time} <br />
            <strong>Location:</strong> {request.location}
          </li>
        ))}
      </ul>
      <button onClick={handleConfirmSelection}>Confirm Selection</button>
    </div>
  );
}

export default DeliveryApp;
