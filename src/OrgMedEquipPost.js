import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming this is the correct import for useFetch
import Modal from 'react-modal';
import { XCircleIcon } from "@heroicons/react/16/solid";

Modal.setAppElement('#root');

const ViewMedicalEquipmentDetails = ({id, status}) => {
    
    const { data: medicalEquipment, error, isPending } = useFetch('http://localhost:4000/medicalEquipment/' + id);

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    let text = "False"
    if(status){
        text = "True"
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="medical-equipment-details bg-white shadow overflow-hidden sm:rounded-lg mx-4 my-4 p-4 flex">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {medicalEquipment && (
                <>
                    <div className="w-full pr-4 flex flex-col">
                        <div className="bg-white overflow-hidden shadow rounded-lg border flex-grow">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Medical Equipment Details
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Medical equipment details.
                                </p>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {medicalEquipment.name}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Device Type
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {medicalEquipment.deviceType}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Use
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {medicalEquipment.use}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Quantity
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {medicalEquipment.quantity}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Fulfilled
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {text}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                            
                            <button onClick={() => navigate('/org/medEquip')}
                                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Edit Post
                            </button>
                            <button onClick={() => navigate('/org/myposts')}
                                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Delete Post
                            </button>
                        </div>
                    </div>
                    <div className="w-2/5 pl-4 flex flex-col">
                        <div className="flex-grow">
                            <img src={medicalEquipment.image} alt={medicalEquipment.name}
                                className="object-cover w-64 h-64 rounded-lg shadow-md cursor-pointer"
                                onClick={openModal} />
                        </div>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Image Modal"
                        className="fixed inset-0 flex items-center justify-center transition-all duration-500 ease-in-out"
                        overlayClassName="Overlay fixed inset-0 bg-black bg-opacity-50" // Add semi-transparent black background to overlay
                    >
                        <div className="bg-gray-300 p-4 rounded-lg relative shadow-lg">
                            <XCircleIcon
                                className="h-6 w-6 absolute bg-gray-400 top-2 right-2 cursor-pointer text-white hover:bg-gray-500 rounded-full"
                                onClick={closeModal} />
                            <img src={medicalEquipment.image} alt={medicalEquipment.name}
                                className="object-cover w-auto h-auto max-w-2xl max-h-2xl" />
                        </div>
                    </Modal>
                </>
            )}
        </div>
    )
}

export default ViewMedicalEquipmentDetails;
