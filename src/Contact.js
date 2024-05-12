import React from 'react';

const Contact = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Contact Information
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Our Address</h3>
          <p className="text-gray-700 mb-4">
            1234 Street Name, City, State, Country
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Email</h3>
          <p className="text-gray-700 mb-4">
            info@example.com
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Phone</h3>
          <p className="text-gray-700 mb-4">
            +1 (234) 567-8901
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;