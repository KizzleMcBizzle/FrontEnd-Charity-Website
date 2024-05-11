import React, { useState } from 'react';

const DonationDetailsForMedicalSupp= () => {
  const [deviceType, setDeviceType] = useState('');
  const [use, setUse] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted medical supplies donation:', { deviceType, use, image, quantity });
   
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Medical Supplies Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="deviceType" className="block text-gray-700 mb-2">Device Type:</label>
          <input type="text" id="deviceType" value={deviceType} onChange={(e) => setDeviceType(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter device type" />
        </div>
        <div className="mb-4">
          <label htmlFor="use" className="block text-gray-700 mb-2">Use:</label>
          <input type="text" id="use" value={use} onChange={(e) => setUse(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter use" />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 mb-2">Image:</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter image URL" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
          <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter quantity" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForMedicalSupp;
