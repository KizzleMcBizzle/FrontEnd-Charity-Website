import React, { useState } from 'react';

const DonationDetailsForTeaching = () => {
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');
  const [address, setAddress] = useState('');
  const [subjects, setSubjects] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!title || !area || !governorate || !numberOfStudents || !address || !subjects) {
      alert('All fields are required');
      return;
    }
    console.log('Submitted teaching donation details:', {
      title,
      area,
      governorate,
      numberOfStudents,
      address,
      subjects
    });
    // Additional logic here (e.g., sending data to backend)
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-semibold mb-6">Enter Teaching Donation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter title" />
        </div>
        <div className="mb-4">
          <label htmlFor="area" className="block text-gray-700 mb-2">Area:</label>
          <input type="text" id="area" value={area} onChange={(e) => setArea(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter area" />
        </div>
        <div className="mb-4">
          <label htmlFor="governorate" className="block text-gray-700 mb-2">Governorate:</label>
          <input type="text" id="governorate" value={governorate} onChange={(e) => setGovernorate(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter governorate" />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfStudents" className="block text-gray-700 mb-2">Number of Students:</label>
          <input type="number" id="numberOfStudents" value={numberOfStudents} onChange={(e) => setNumberOfStudents(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter number of students" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter address" />
        </div>
        <div className="mb-4">
          <label htmlFor="subjects" className="block text-gray-700 mb-2">Subjects:</label>
          <input type="text" id="subjects" value={subjects} onChange={(e) => setSubjects(e.target.value)} className="w-full bg-white border border-green-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Enter subjects" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonationDetailsForTeaching;
