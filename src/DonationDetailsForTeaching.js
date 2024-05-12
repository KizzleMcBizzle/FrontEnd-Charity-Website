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
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg" onSubmit={handleSubmit}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Enter Teaching Donation Details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <input id="title" name="title" type="text" required
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
              Area
            </label>
            <input id="area" name="area" type="text" required
                   value={area}
                   onChange={(e) => setArea(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="governorate" className="block text-sm font-medium leading-6 text-gray-900">
              Governorate
            </label>
            <input id="governorate" name="governorate" type="text" required
                   value={governorate}
                   onChange={(e) => setGovernorate(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="numberOfStudents" className="block text-sm font-medium leading-6 text-gray-900">
              Number of Students
            </label>
            <input id="numberOfStudents" name="numberOfStudents" type="number" required
                   value={numberOfStudents}
                   min={1}
                   onChange={(e) => setNumberOfStudents(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <input id="address" name="address" type="text" required
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
          </div>
          <div>
            <label htmlFor="subjects" className="block text-sm font-medium leading-6 text-gray-900">
              Subjects
            </label>
            <input id="subjects" name="subjects" type="text" required
                   value={subjects}
                   onChange={(e) => setSubjects(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
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

export default DonationDetailsForTeaching;