import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ahlMasr from './ahlMasr.png';
import bankElta3am from './bankElta3am.png';
import magdi from './magdi.png';
import orman from './orman.png';
import resala from './resala.png';

const Home = () => {
    // Updated data for affiliate organizations
    const affiliateOrganizations = [
        { id: 1, name: 'Ahl Masr', logo: ahlMasr },
        { id: 2, name: 'Bank el Ta3am', logo: bankElta3am },
        { id: 3, name: 'Magdi Yaacoub', logo: magdi },
        { id: 4, name: 'Orman', logo: orman },
        { id: 5, name: 'Resala', logo: resala },
        // Add more organizations as needed
    ];

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Welcome to HopeUnity</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
                    We are dedicated to bringing hope and making a difference in our community through various initiatives and partnerships.
                </p>

                {/* Affiliate Organizations Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Affiliate Organizations</h2>
                    <div className="flex space-x-4 overflow-x-auto justify-center">
                        {affiliateOrganizations.map(org => (
                            <div key={org.id} className="w-32 h-32 md:w-40 md:h-40 bg-white shadow-md rounded-lg p-4 flex items-center justify-center">
                                <img src={org.logo} alt={org.name} className="w-full h-full object-cover object-center" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Us Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
                        At HopeUnity, we believe in the power of unity and community support. Our mission is to make a positive impact by providing aid to those in need and fostering a sense of belonging.
                    </p>
                </div>

                {/* Cause Cards Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Causes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Health Sector Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Help save lives by donating blood, medications, and medical supplies to hospitals and individuals in need.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">School Supplies Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Support education by providing school books, supplies, and offering pro-bono teaching opportunities.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Refugee and Poverty Line Needs</h3>
                            <p className="text-gray-700 mb-4">
                                Assist families in need with essentials such as clothing, kitchen supplies, food, and electrical appliances.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Orphanage Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Bring joy to children by donating clothes, toys, school supplies, and luxury foods to orphanages.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Elderly Care Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Show love and care to the elderly by donating medical equipment, food, and companionship.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Food Bank Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Help fight hunger by donating non-perishable food items and volunteering at local food banks.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Clothing Drive Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Provide warmth and comfort by donating clothes, shoes, and blankets to those in need.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Pro bono teaching and pro bono doctor appointments</h3>
                            <p className="text-gray-700 mb-4">
                                Offer your time and expertise by providing free teaching sessions or medical consultations.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Blood Drive Donations</h3>
                            <p className="text-gray-700 mb-4">
                                Save lives by donating blood and plasma to hospitals and blood banks.
                            </p>
                            <Link to="/donor/donor" className="bg-custom-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
