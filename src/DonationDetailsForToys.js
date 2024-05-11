import React, { useState } from 'react';

const DonationDetailsForToys = () => {
  const [name, setName] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');

  const ageRangeOptions = ['0-1', '1-3', '3-6', '6-9', '9+'];
  const genderOptions = ['Any', 'Male', 'Female'];
  const categoryOptions = ['Board games', 'Stuffed toys', 'Dolls', 'Sports', 'Cars', 'Outdoor'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted toy donation:', { name, ageRange, gender, category });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Toy Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter toy name" />
        </div>
        <div className="mb-4">
          <label htmlFor="ageRange" className="block text-gray-700 mb-2">Age Range:</label>
          <select id="ageRange" value={ageRange} onChange={(e) => setAgeRange(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select age range</option>
            {ageRangeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
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
          <label htmlFor="category" className="block text-gray-700 mb-2">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select category</option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForToys;

