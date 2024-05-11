import React, { useState } from 'react';

function VehicleBookingForm() {
    const [formData, setFormData] = useState({
        vehicleType: 'car',
        fullName: '',
        phoneNumber: '',
        email: '',
        date: '',
        time: '',
        area: '',
        city: '',
        state: '',
        postCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      
    }

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="vehicle-type" className="mb-3 block text-base font-medium text-[#07074D]">
                            Vehicle Type
                        </label>
                        <select name="vehicleType" id="vehicle-type" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={formData.vehicleType} onChange={handleChange}>
                            <option value="car">Car</option>
                            <option value="truck">Truck</option>
                            <option value="motorcycle">Motorcycle</option>
                        </select>
                    </div>

                  

                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            Address Details
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Book a Pickup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VehicleBookingForm;
