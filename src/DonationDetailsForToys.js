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
    if (!name || !ageRange || !gender || !category) {
      alert('All fields are required');
      return;
    }
    console.log('Submitted toy donation:', { name, ageRange, gender, category });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg" onSubmit={handleSubmit}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Enter Toy Donation Details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input id="name" name="name" type="text" required
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="ageRange" className="block text-sm font-medium leading-6 text-gray-900">
              Age Range
            </label>
            <select id="ageRange" value={ageRange} onChange={(e) => setAgeRange(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6">
              <option value="">Select age range</option>
              {ageRangeOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
              Gender
            </label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6">
              <option value="">Select gender</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Category
            </label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6">
              <option value="">Select category</option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationDetailsForToys;