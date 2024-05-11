import React, { useState } from 'react';

const DonationDetailsForBloodDonation = () => {
  const [hospital, setHospital] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted blood donation:', { hospital, governorate, area });
    
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Blood Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="hospital" className="block text-gray-700 mb-2">Hospital:</label>
          <input type="text" id="hospital" value={hospital} onChange={(e) => setHospital(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter hospital name" />
        </div>
        <div className="mb-4">
          <label htmlFor="governorate" className="block text-gray-700 mb-2">Governorate:</label>
          <input type="text" id="governorate" value={governorate} onChange={(e) => setGovernorate(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter governorate" />
        </div>
        <div className="mb-4">
          <label htmlFor="area" className="block text-gray-700 mb-2">Area:</label>
          <input type="text" id="area" value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter area" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForBloodDonation;
