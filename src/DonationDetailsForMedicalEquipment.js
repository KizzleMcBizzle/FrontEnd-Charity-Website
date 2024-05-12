import React, { useState } from 'react';
import {ClipLoader} from "react-spinners";

const DonationDetailsForMedicalEquipment = () => {
  const [name, setName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [use, setUse] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');


  const handleImageChange = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (file) {
      setTimeout(() => {
        setImage(file);
        setFileName(file.name);
        setLoading(false);
      }, 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!name || !deviceType || !use || !image || !quantity) {
      alert('All fields are required');
      return;
    }
    console.log('Submitted medical equipment donation details:', {
      name,
      deviceType,
      use,
      image,
      quantity
    });
    // Additional logic here (e.g., sending data to backend)
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg" onSubmit={handleSubmit}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Enter Medical Equipment Donation Details
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
            <label htmlFor="deviceType" className="block text-sm font-medium leading-6 text-gray-900">
              Device Type
            </label>
            <input id="deviceType" name="deviceType" type="text" required
                   value={deviceType}
                   onChange={(e) => setDeviceType(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="use" className="block text-sm font-medium leading-6 text-gray-900">
              Use
            </label>
            <input id="use" name="use" type="text" required
                   value={use}
                   onChange={(e) => setUse(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
              Quantity
            </label>
            <input id="quantity" name="quantity" type="number" required
                   value={quantity}
                   onChange={(e) => setQuantity(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
              Image:
            </label>
            <input
                id="image"
                name="image"
                type="file"
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
            />
            <label
                htmlFor="image"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 cursor-pointer bg-custom-green text-white text-center"
            >
              Choose Image
            </label>
            {loading ? (
                <div className="flex justify-center mt-2">
                  <ClipLoader/>
                </div>
            ) : (
                fileName && (
                    <p className="text-sm text-gray-500 mt-2">Uploaded file: {fileName}</p>
                )
            )}
            <p className="text-sm text-gray-500 mt-4">
              Upload an image of the medical equipment for verification purposes.
            </p>
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

export default DonationDetailsForMedicalEquipment;