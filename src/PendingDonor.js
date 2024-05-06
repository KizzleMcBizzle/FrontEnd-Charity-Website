import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming this is the correct import for useFetch
import { saveAs } from 'file-saver';

const PendingDonor = () => {
    const { id } = useParams();
    const { data: donor, error, isPending } = useFetch('http://localhost:4000/donors/' + id);
    const history = useHistory();

    const handleAccept = () => {
        fetch('http://localhost:4000/donors/' + donor.id, {
            method: 'PUT', // Assuming this updates the donor's status to accepted
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...donor, verified: true }) // Update the status field to 'accepted'
        }).then(() => {
            console.log('Donor accepted!');
            history.push('/admin/req/donors');
        });
    };

    const handleReject = () => {
        fetch('http://localhost:4000/donors/' + donor.id, {
        method: 'DELETE',
    }).then(() => {
        console.log('Donor deleted!') 
        history.push('/admin/req/donors');
    })
    };

    const handleDownload = () => {
        // Assuming the document URL is stored in the donor object under the 'document' field
        const documentUrl = "/resources/org_qualification_proof.pdf";
        const anchorElement = document.createElement('a');
        anchorElement.href = documentUrl;
        anchorElement.download = 'org_qualification_proof.pdf'; // Name of the downloaded file

        // Check if the file exists on the server (optional)
        fetch(documentUrl, { method: 'HEAD' })
        .then(response => {
        if (response.ok) {
        anchorElement.click();
        } else {
        console.error(`Error: File not found at ${documentUrl}`);
        }
    })
   .catch(error => {
      console.error(`Error: ${error.message}`);
    });
    };

    return (
        <div className="donor-details bg-white shadow overflow-hidden sm:rounded-lg mx-4 my-4 p-4">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {donor && (
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Donor Details
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Donor details and contact information.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {donor.name}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Role
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {donor.role}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {donor.email}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Contact Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {donor.contactNumber}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            )}
            <div className="buttons mt-4 px-4 py-5 sm:px-6">
                <button onClick={handleAccept}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Accept
                </button>
                <button onClick={handleReject}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Reject
                </button>
                <button onClick={handleDownload}
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Download
                </button>
            </div>
        </div>
    );
}

export default PendingDonor;
