import React, { useState } from 'react';

const DonationDetailsForClothes= () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');

  const genderOptions = ['Male', 'Female'];
  const seasonOptions = ['Spring', 'Summer', 'Fall', 'Winter'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted clothes donation:', { age, gender, season });
   
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Clothes Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 mb-2">Age:</label>
          <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 mb-2">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select gender</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="season" className="block text-gray-700 mb-2">Season:</label>
          <select id="season" value={season} onChange={(e) => setSeason(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select season</option>
            {seasonOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForClothes.js;