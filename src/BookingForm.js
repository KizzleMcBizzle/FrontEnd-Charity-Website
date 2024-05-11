import React, { useState, useEffect } from 'react';
import './App.css';

function BookingForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [timeDifference, setTimeDifference] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission action

    const currentDateTime = new Date();
    const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
    
    if (pickupDateTime > currentDateTime) {
      const diff = Math.ceil((pickupDateTime - currentDateTime) / (1000 * 60 * 60)); // Difference in hours
      setTimeDifference(`${diff} hour(s) until pickup`);
    } else {
      setTimeDifference('Invalid time chosen (past or present)');
    }

    setShowPopup(true); // Show the popup message
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000); // Popup will disappear after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white form-container shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Book Your Donation Pickup</h2>

          <label htmlFor="vehicle-type" className="block mb-2">
            Vehicle Type
          </label>
          <select 
            id="vehicle-type" 
            className="form-select mb-4 p-2 w-full border rounded"
          >
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="motorcycle">Motorcycle</option>
          </select>

          <label htmlFor="name" className="block mb-2">
            Full Name
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Full Name"
            className="form-input mb-4 p-2 w-full border rounded"
          />

          <label htmlFor="phone" className="block mb-2">
            Phone Number
          </label>
          <input 
            type="text" 
            id="phone" 
            placeholder="Enter your phone number"
            className="form-input mb-4 p-2 w-full border rounded"
          />

          <label htmlFor="area" className="block mb-2">
            Address
          </label>
          <input 
            type="area" 
            id="area" 
            placeholder="Enter your address details"
            className="form-input mb-4 p-2 w-full border rounded"
          />

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 mb-4 sm:w-1/2">
              <label htmlFor="date" className="block mb-2">
                Date of Pickup
              </label>
              <input 
                type="date" 
                id="date"
                className="form-input p-2 w-full border rounded"
                value={pickupDate}
                onChange={e => setPickupDate(e.target.value)}
              />
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <label htmlFor="time" className="block mb-2">
                Time for Pickup
              </label>
              <input 
                type="time" 
                id="time"
                className="form-input p-2 w-full border rounded"
                value={pickupTime}
                onChange={e => setPickupTime(e.target.value)}
              />
            </div>
          </div>

          <button className="submit-button">
            Book a Pickup
          </button>
        </form>

        {showPopup && (
          <div className="popup-message fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 border rounded shadow-lg">
            Booking was successful! ETA is {timeDifference}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
