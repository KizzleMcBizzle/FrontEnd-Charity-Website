import React, { useState } from 'react';

const DonationDetailsForSchoolSupp = () => {
  const [supplyType, setSupplyType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted school supplies donation:', { supplyType, quantity, condition });
    // You can send this data to your backend or handle it as needed
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter School Supplies Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="supplyType" className="block text-gray-700 mb-2">Supply Type:</label>
          <input type="text" id="supplyType" value={supplyType} onChange={(e) => setSupplyType(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter supply type" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
          <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter quantity" />
        </div>
        <div className="mb-4">
          <label htmlFor="condition" className="block text-gray-700 mb-2">Condition:</label>
          <select id="condition" value={condition} onChange={(e) => setCondition(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForSchoolSupp;
