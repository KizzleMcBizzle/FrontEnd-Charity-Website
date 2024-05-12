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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter Medical Case Details
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
              <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  min={1}
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
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
              >
                <option value="">Select gender</option>
                {genders.map(gender => (
                    <option key={gender} value={gender}>{gender}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                Weight (kg)
              </label>
              <input
                  id="weight"
                  name="weight"
                  type="number"
                  min={1}
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter weight"
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
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter address"
              />
            </div>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-medium leading-6 text-gray-900">
                Organization Name
              </label>
              <input
                  id="organizationName"
                  name="organizationName"
                  type="text"
                  required
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter organization name"
              />
            </div>
            <div>
              <label htmlFor="medicalSpecialty" className="block text-sm font-medium leading-6 text-gray-900">
                Medical Specialty
              </label>
              <input
                  id="medicalSpecialty"
                  name="medicalSpecialty"
                  type="text"
                  required
                  value={medicalSpecialty}
                  onChange={(e) => setMedicalSpecialty(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter medical specialty"
              />
            </div>
            <div>
              <label htmlFor="governorate" className="block text-sm font-medium leading-6 text-gray-900">
                Governorate
              </label>
              <input
                  id="governorate"
                  name="governorate"
                  type="text"
                  required
                  value={governorate}
                  onChange={(e) => setGovernorate(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter governorate"
              />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
                Area
              </label>
              <input
                  id="area"
                  name="area"
                  type="text"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Enter area"
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

export default DonationDetailsForMedCase;
