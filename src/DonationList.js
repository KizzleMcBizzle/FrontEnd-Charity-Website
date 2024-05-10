import { Link } from 'react-router-dom';

const DonationList = ({ donations, title }) => {
    return (
        <div className="donation-list bg-white p-5 rounded-lg shadow-md w-full flex items-center flex-col">
            <h2 className="text-2xl font-bold mb-5">{title}</h2>
            {donations.map(donation => (
                <div className="donation-preview mb-4 p-4 bg-white rounded-lg shadow border border-gray-200 flex items-center" key={donation.id}>
                    <img src={donation.img} alt={donation.type} className="w-32 h-32 object-cover rounded-lg mr-4 border border-gray-300"/>
                    <div className="donation-info w-64 h-32 flex items-center">
                        <Link to={`/${donation.name}`} className="text-blue-500 hover:text-custom-green">
                            <h2 className="font-semibold text-gray-800 hover:text-green-600 text-xl">{ donation.title }</h2>
                        </Link>
                        <p className="text-gray-600 text-lg">{ donation.description }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DonationList;