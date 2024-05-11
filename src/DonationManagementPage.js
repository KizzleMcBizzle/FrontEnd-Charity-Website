import React, { useState } from 'react';
import DonationDetailsForBloodDonation from './DonationDetailsForBloodDonation';
import DonationDetailsForClothes from './DonationDetailsForClothes';
import DonationDetailsForToys from './DonationDetailsForToys';
import DonationDetailsForMedicalSupp from './DonationDetailsForMedicalSupp';
import DonationDetailsForFood from './DonationDetailsForFood';
import DonationDetailsForSchoolSupp from './DonationDetailsForSchoolSupp';
import DonationDetailsForMedications from './DonationDetailsForMedications';
import Notification from './Notification';

const DonationManagementPage = () => {
  const [donations, setDonations] = useState([]);
  const [notification, setNotification] = useState('');

  // Function to add a new donation to the centralized state
  const addDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
    setNotification(`Donation "${newDonation.name}" has been added.`);
  };

  // Function to update a donation in the centralized state
  const updateDonation = (updatedDonation) => {
    const updatedDonations = donations.map((donation) => {
      if (donation.id === updatedDonation.id) {
        return updatedDonation;
      }
      return donation;
    });
    setDonations(updatedDonations);
    setNotification(`Donation "${updatedDonation.name}" has been updated.`);
  };

  // Function to delete a donation from the centralized state
  const deleteDonation = (donationId) => {
    const updatedDonations = donations.filter((donation) => donation.id !== donationId);
    setDonations(updatedDonations);
    setNotification('Donation has been deleted.');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Donation Management Page</h1>
      {notification && <Notification message={notification} />}
      {donations.length === 0 ? (
        <p>No donations available.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {donations.map((donation) => (
            <li key={donation.id} className="py-4">
              <h2 className="text-lg font-semibold">{donation.name}</h2>
              <p className="text-sm text-gray-600">Type: {donation.type}</p>
              <p className="text-sm text-gray-500 mt-1">Quantity: {donation.quantity}</p>
              <p className="text-sm text-gray-500">Status: {donation.status}</p>
              <button className="text-blue-500 mr-2" onClick={() => updateDonation({ ...donation, status: 'Pending' })}>Mark Pending</button>
              <button className="text-green-500 mr-2" onClick={() => updateDonation({ ...donation, status: 'Approved' })}>Mark Approved</button>
              <button className="text-red-500" onClick={() => deleteDonation(donation.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonationManagementPage;
