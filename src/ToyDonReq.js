import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ToyDonReq = ({ toys }) => {

    const [currToys, setCurrToys] = useState(toys);

    useEffect(() => {
        setCurrToys(toys);
    }, [toys]);

    return (
        <div className="toy-req-list">
            {currToys.map( toy => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {toy.id}>
                    <Link to={`/toys/${toy.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ toy.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default ToyDonReq;