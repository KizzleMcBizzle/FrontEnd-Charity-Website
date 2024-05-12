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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter Clothes Donation Details
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter name"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </label>
              <input
                  id="type"
                  name="type"
                  type="text"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter type"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <input
                  id="age"
                  name="age"
                  type="text"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter age"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
              >
                <option value="">Select gender</option>
                {genderOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="season" className="block text-sm font-medium leading-6 text-gray-900">
                Season
              </label>
              <select
                  id="season"
                  name="season"
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
              >
                <option value="">Select season</option>
                {seasonOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="material" className="block text-sm font-medium leading-6 text-gray-900">
                Material
              </label>
              <input
                  id="material"
                  name="material"
                  type="text"
                  required
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter material"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>
              <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={1}
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter quantity"
              />
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

export default DonationDetailsForClothes;
