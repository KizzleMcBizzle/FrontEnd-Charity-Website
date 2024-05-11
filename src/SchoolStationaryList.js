import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const SchoolStationaryList = ({ clothes }) => {
    const [currClothes, setCurrClothes] = useState(clothes);

    useEffect(() => {
        setCurrClothes(clothes);
    }, [clothes]);

    
    
    return (  
        <div className="clothes-List">
            {currClothes.map( cloth => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {cloth.id}>
                    <Link to={`/donor/schoolStationary/${cloth.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ cloth.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default SchoolStationaryList;