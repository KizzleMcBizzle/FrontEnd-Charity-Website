import { Link } from "react-router-dom";


const OrgUseReq = ({ orgs, title }) => {
    const nonVerifiedOrgs = orgs.filter(org => !org.verified);
    
    return ( 
        <div className="org-use-req-list">
            {nonVerifiedOrgs.map( org => (
                <div className="bg-white p-4 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg" key = {org.id}>
                    <Link to={`/admin/orgReq/${org.id}`} className="no-underline">
                        <h2 className="text-xl text-pink-600 mb-2">{ org.name }</h2>
                    </Link>
                </div>
            ))}
        </div>

     );
}
 
export default OrgUseReq;