import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DonUseReq = ({donors, title}) => {
    // Filter the donors array to include only non-verified donors
    const nonVerifiedDonors = donors.filter(donor => !donor.verified);
    
    return (  
        <div className="donor-use-req-list">
            {nonVerifiedDonors.map( donor => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {donor.id}>
                    <Link to={`/admin/req/donors/${donor.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ donor.name }</h2>
                        <p className="mt-2 text-center text-l leading-9 tracking-tight text-gray-800">{ donor.role }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default DonUseReq;
