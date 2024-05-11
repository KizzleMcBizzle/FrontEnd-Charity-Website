import React, { useState } from 'react';

const DonationManagement = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [updatedDonation, setUpdatedDonation] = useState({
    id: '',
    title: '',
    description: '',
    // Add other fields as needed
  });

  const addNewDonation = (newDonation) => {
    setDonations([...donations, { ...newDonation, id: Date.now() }]);
  };

  const handleUpdateClick = (donation) => {
    setSelectedDonation(donation);
    setUpdatedDonation({ ...donation });
  };

  const handleDeleteClick = (donationId) => {
    setDonations(donations.filter(donation => donation.id !== donationId));
  };

  const handleUpdateDonation = () => {
    const updatedDonations = donations.map(donation => {
      if (donation.id === selectedDonation.id) {
        return updatedDonation;
      }
      return donation;
    });
    setDonations(updatedDonations);
    setSelectedDonation(null);
    setUpdatedDonation({
      id: '',
      title: '',
      description: '',
      // Reset other fields...
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Donation Management</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation.id} className="border rounded p-4 my-2">
            <div>
              <strong className="text-lg">{donation.title}</strong>
              <p className="text-gray-700">{donation.description}</p>
              {/* Render other donation details... */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleUpdateClick(donation)}>Update</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteClick(donation.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Update form */}
      {selectedDonation && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Update Donation</h3>
          <input
            type="text"
            value={updatedDonation.title}
            onChange={(e) => setUpdatedDonation({ ...updatedDonation, title: e.target.value })}
            className="border rounded px-3 py-2 w-full"
          />
          {/* Render other input fields for donation details... */}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleUpdateDonation}>Save</button>
        </div>
      )}
    </div>
  );
};

export default DonationManagement;
