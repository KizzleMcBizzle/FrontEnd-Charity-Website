import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DonUseReq = ({donors, title}) => {
    // Filter the donors array to include only non-verified donors
    const nonVerifiedDonors = donors.filter(donor => !donor.verified);
    
    return (  
        <div className="donor-use-req-list">
            <h2>{ title }</h2>
            {nonVerifiedDonors.map( donor => (
                <div className="bg-white p-4 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg" key = {donor.id}>
                    <Link to={`/donors/${donor.id}`} className="no-underline">
                        <h2 className="text-xl text-pink-600 mb-2">{ donor.name }</h2>
                        <p>{ donor.role }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default DonUseReq;
