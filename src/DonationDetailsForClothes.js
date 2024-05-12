import React, { useState } from 'react';

const DonationDetailsForClothes = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('');

  const genderOptions = ['Male', 'Female'];
  const seasonOptions = ['Spring', 'Summer', 'Fall', 'Winter'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !age || !gender || !season || !material || !quantity) {
      alert('All fields are required');
      return;
    }
    
    console.log('Submitted clothes donation:', { name, type, age, gender, season, material, quantity });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Clothes Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 mb-2">Type:</label>
          <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" />
        </div>
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
        <div className="mb-4">
          <label htmlFor="material" className="block text-gray-700 mb-2">Material:</label>
          <input type="text" id="material" value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
          <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForClothes;
