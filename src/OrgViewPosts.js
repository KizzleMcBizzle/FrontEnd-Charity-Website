import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const OrgUseReq = ({ posts }) => {

    return (
        <div className="org-use-req-list">
            {posts.map( post => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {post.id}>
                    <Link to={`/org/myposts/${post.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ post.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default OrgUseReq;