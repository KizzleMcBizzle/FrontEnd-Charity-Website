import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming this is the correct import for useFetch
import { saveAs } from 'file-saver';

const ViewFoodDetails = () => {
    const { id } = useParams();
    const { data: food, error, isPending } = useFetch('http://localhost:4000/food/' + id);
    const navigate = useNavigate();


    return (
        <div className="food-details bg-white shadow overflow-hidden sm:rounded-lg mx-4 my-4 p-4">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {food && (
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Food Details
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Food details.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {food.name}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Food Type
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {food.type}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Required Quantity
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {food.quantity_required}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="buttons mt-4 px-4 py-5 sm:px-6">
               
                         <button onClick={''}
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Donate
                         </button>
                    </div>
                </div>
                
                )}
     </div>
    )}
    


export default ViewFoodDetails;
