import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  const pickupDateTime = useRef(new Date());
  const [errorMessage, setErrorMessage] = useState(''); // New state variable for error message

  const navigate = useNavigate();

  useEffect(() => {
    pickupDateTime.current = new Date(`${pickupDate}T${pickupTime}`);
  }, [pickupDate, pickupTime]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDateTime = new Date();

    if (pickupDateTime.current <= currentDateTime) {
      setErrorMessage('The selected date and time must be in the future.');
      setShowPopup(true);
      return;
    } else {
      setErrorMessage(''); // Clear the error message when a valid date is selected
    }

    const diff = Math.ceil((pickupDateTime.current - currentDateTime) / (1000 * 60 * 60));
    setTimeDifference(`${diff} hour(s) until pickup`);

    setShowPopup(true);
  };


  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        if (!errorMessage) {
          navigate('/donor/donor');
        }
      }, 3000); // Popup will disappear after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white form-container shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Book Your Donation Pickup</h2>

          <label htmlFor="vehicle-type" className="block mb-2">Vehicle Type</label>
          <select id="vehicle-type" className="form-select mb-4 p-2 w-full border border-gray-200 rounded" required>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="motorcycle">Motorcycle</option>
          </select>

          <label htmlFor="name" className="block mb-2">Full Name</label>
          <input type="text" id="name" placeholder="Full Name"
                 className="form-input mb-4 p-2 w-full border border-gray-200 rounded"
                 required/>

          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <input type="text" id="phone" placeholder="Enter your phone number"
                 className="form-input mb-4 p-2 w-full border border-gray-200 rounded" required/>

          <label htmlFor="area" className="block mb-2">Address</label>
          <input type="area" id="area" placeholder="Enter your address details"
                 className="form-input mb-4 p-2 w-full border border-gray-200 rounded" required/>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 mb-4 sm:w-1/2">
              <label htmlFor="date" className="block mb-2">Date of Pickup</label>
              <input type="date" id="date" className="form-input p-2 w-full border border-gray-200 rounded"
                     value={pickupDate}
                     onChange={e => setPickupDate(e.target.value)} required/>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <label htmlFor="time" className="block mb-2">Time for Pickup</label>
              <input type="time" id="time" className="form-input p-2 w-full border border-gray-200 rounded"
                     value={pickupTime}
                     onChange={e => setPickupTime(e.target.value)} required/>
            </div>
          </div>

          <div className="relative">
            <button
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">
              Book a Pickup
            </button>
            {showPopup && (
                <div
                    className="popup-message absolute top-full left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 border rounded shadow-lg mt-2">
                  {errorMessage ? errorMessage : `Booking was successful! ETA is ${timeDifference}`}
                </div>
            )}
          </div>
        </form>


      </div>
    </div>
  );
}

export default BookingForm;
