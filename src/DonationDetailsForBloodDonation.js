import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from "react-toastify";

const DonationDetailsForBloodDonation = () => {
  const [patientName, setPatientName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalArea, setHospitalArea] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [location, setLocation] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !bloodType || !hospitalName || !hospitalArea || !governorate || !hospitalAddress || !location) {
      alert('All fields are required');
      return;
    }

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

  const handleFileUpload = (event) => {
    setLoading(true);
    setTimeout(() => {
      setFileName(event.target.files[0].name);
      setLoading(false);
    }, 2000);
  };

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg" onSubmit={handleSubmit}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter Blood Donation Details
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium leading-6 text-gray-900">
                Patient Name
              </label>
              <input
                  id="patientName"
                  name="patientName"
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter patient name"
              />
            </div>
            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium leading-6 text-gray-900">
                Blood Type
              </label>
              <select
                  id="bloodType"
                  name="bloodType"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
              >
                <option value="">Select blood type</option>
                {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital Name
              </label>
              <input
                  id="hospitalName"
                  name="hospitalName"
                  type="text"
                  required
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter hospital name"
              />
            </div>
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital Area
              </label>
              <input
                  id="hospitalName"
                  name="hospitalName"
                  type="text"
                  required
                  value={hospitalArea}
                  onChange={(e) => setHospitalArea(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter hospital name"
              />
            </div>
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium leading-6 text-gray-900">
                Governorate
              </label>
              <input
                  id="hospitalName"
                  name="hospitalName"
                  type="text"
                  required
                  value={governorate}
                  onChange={(e) => setGovernorate(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter hospital name"
              />
            </div>
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital Address
              </label>
              <input
                  id="hospitalName"
                  name="hospitalName"
                  type="text"
                  required
                  value={hospitalAddress}
                  onChange={(e) => setHospitalAddress(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter hospital name"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter location"
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

export default DonationDetailsForBloodDonation;
