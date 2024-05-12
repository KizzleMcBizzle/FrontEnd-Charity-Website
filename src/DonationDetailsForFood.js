import React, { useState } from 'react';

const DonationDetailsForFood = () => {
  const [foodType, setFoodType] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foodType || !name || !quantity) {
      alert('All fields are required');
      return;
    }

    console.log('Submitted food donation:', { foodType, name, quantity });
  };

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter Food Donation Details
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="foodType" className="block text-sm font-medium leading-6 text-gray-900">
                Food Type
              </label>
              <input
                  id="foodType"
                  name="foodType"
                  type="text"
                  required
                  value={foodType}
                  onChange={(e) => setFoodType(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter food type"
              />
            </div>
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

export default DonationDetailsForFood;
