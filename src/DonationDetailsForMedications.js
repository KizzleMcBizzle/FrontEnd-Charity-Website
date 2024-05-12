import React, { useState } from 'react';

const DonationDetailsForMedications = () => {
  const [name, setName] = useState('');
  const [use, setUse] = useState('');
  const [disease, setDisease] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!name || !use || !disease || !quantity) {
      alert('All fields are required');
      return;
    }
    console.log('Submitted medication donation:', { name, use, disease, quantity });
    // Additional logic here (e.g., sending data to backend)
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Medication Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="use" className="block text-gray-700 mb-2">Use:</label>
          <input type="text" id="use" value={use} onChange={(e) => setUse(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter use" required />
        </div>
        <div className="mb-4">
          <label htmlFor="disease" className="block text-gray-700 mb-2">Disease:</label>
          <input type="text" id="disease" value={disease} onChange={(e) => setDisease(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter disease" required />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
          <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter quantity" required />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForMedications;
