import React, { useState } from 'react';

const DonationDetailsForBloodDonation = () => {
  const [patientName, setPatientName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalArea, setHospitalArea] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [location, setLocation] = useState('');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted blood donation:', {
      patientName,
      bloodType,
      hospitalName,
      hospitalArea,
      governorate,
      hospitalAddress,
      location
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Blood Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="patientName" className="block text-gray-700 mb-2">Patient Name:</label>
          <input type="text" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter patient name" />
        </div>
        <div className="mb-4">
          <label htmlFor="bloodType" className="block text-gray-700 mb-2">Blood Type:</label>
          <select id="bloodType" value={bloodType} onChange={(e) => setBloodType(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select blood type</option>
            {bloodTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="hospitalName" className="block text-gray-700 mb-2">Hospital Name:</label>
          <input type="text" id="hospitalName" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter hospital name" />
        </div>
        <div className="mb-4">
          <label htmlFor="hospitalArea" className="block text-gray-700 mb-2">Hospital Area:</label>
          <input type="text" id="hospitalArea" value={hospitalArea} onChange={(e) => setHospitalArea(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter hospital area" />
        </div>
        <div className="mb-4">
          <label htmlFor="governorate" className="block text-gray-700 mb-2">Governorate:</label>
          <input type="text" id="governorate" value={governorate} onChange={(e) => setGovernorate(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter governorate" />
        </div>
        <div className="mb-4">
          <label htmlFor="hospitalAddress" className="block text-gray-700 mb-2">Hospital Address:</label>
          <input type="text" id="hospitalAddress" value={hospitalAddress} onChange={(e) => setHospitalAddress(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter hospital address" />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 mb-2">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter location" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForBloodDonation;

