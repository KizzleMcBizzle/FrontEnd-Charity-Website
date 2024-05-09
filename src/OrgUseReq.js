import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrgUseReq = ({ orgs }) => {

    const [currOrgs, setCurrOrgs] = useState(orgs);

    useEffect(() => {
        setCurrOrgs(orgs);
    }, [orgs]);

    return (
        <div className="org-use-req-list">
            {currOrgs.map( org => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {org.id}>
                    <Link to={`/admin/req/orgs/${org.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ org.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default OrgUseReq;