import React, { useState } from 'react';

const DonationDetailsForMedCase = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [medicalSpecialty, setMedicalSpecialty] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [area, setArea] = useState('');

  const genders = ['Male', 'Female'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!patientName || !age || !gender || !weight || !location || !address || !organizationName || !medicalSpecialty || !governorate || !area) {
      alert('All fields are required');
      return;
    }
    console.log('Submitted medical case details:', {
      patientName,
      age,
      gender,
      weight,
      location,
      address,
      organizationName,
      medicalSpecialty,
      governorate,
      area
    });
    // Additional logic here (e.g., sending data to backend)
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Medical Case Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="patientName" className="block text-gray-700 mb-2">Patient Name:</label>
          <input type="text" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter patient name" />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 mb-2">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter age" />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 mb-2">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
            <option value="">Select gender</option>
            {genders.map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700 mb-2">Weight (kg):</label>
          <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter weight" />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 mb-2">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter location" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter address" />
        </div>
        <div className="mb-4">
          <label htmlFor="organizationName" className="block text-gray-700 mb-2">Organization Name:</label>
          <input type="text" id="organizationName" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter organization name" />
        </div>
        <div className="mb-4">
          <label htmlFor="medicalSpecialty" className="block text-gray-700 mb-2">Medical Specialty:</label>
          <input type="text" id="medicalSpecialty" value={medicalSpecialty} onChange={(e) => setMedicalSpecialty(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter medical specialty" />
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

export default DonationDetailsForMedCase;
