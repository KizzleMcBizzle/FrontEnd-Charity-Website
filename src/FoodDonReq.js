import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FoodDonReq = ({ food }) => {

    const [currFood, setCurrFood] = useState(food);

    useEffect(() => {
        setCurrFood(food);
    }, [food]);

    return (
        <div className="food-req-list">
            {currFood.map( food => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {food.id}>
                    <Link to={`/donor/food/${food.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ food.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default FoodDonReq;