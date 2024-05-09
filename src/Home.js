import React from 'react';
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
                <h1 className="text-3xl font-bold mb-4">Welcome to Our Community Support Platform</h1>
                <p className="text-lg text-gray-700 mb-8">We are dedicated to helping our community through various initiatives and partnerships.</p>

                {/* Affiliate Organizations Section */}
                <div className="mb-8 overflow-hidden">
                    <h2 className="text-2xl font-bold mb-4">Affiliate Organizations</h2>
                    <div className="flex space-x-4 overflow-x-auto">
                        {affiliateOrganizations.map(org => (
                            <div key={org.id} className="w-32 h-32 flex-shrink-0 bg-white shadow-md rounded-lg p-4 flex items-center justify-center">
                                <img src={org.logo} alt={org.name} className="w-full h-full object-cover object-center" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;