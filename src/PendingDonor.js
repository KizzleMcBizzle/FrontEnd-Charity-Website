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
            history.push('/donors');
        });
    };

    const handleReject = () => {
        fetch('http://localhost:4000/donors/' + donor.id, {
        method: 'DELETE',
    }).then(() => {
        console.log('Donor deleted!') 
        history.push('/donors');
    })
    };

    const handleDownload = () => {
        // Assuming the document URL is stored in the donor object under the 'document' field
    const documentUrl = donor.document.url;
    
    // Use the saveAs function from file-saver to initiate the download
    fetch(documentUrl)
        .then(response => response.blob())
        .then(blob => {
            saveAs(blob, 'qualification_proof.pdf');
        })
        .catch(error => {
            console.error('Error downloading document:', error);
        });
    };

    return (
        <div className="donor-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { donor && (
                <article>
                    <h2>{donor.name}</h2>
                    <p><strong>Role:</strong> {donor.role}</p>
                    <p><strong>Email:</strong> {donor.email}</p>
                    <p><strong>Contact Number:</strong> {donor.contactNumber}</p>
                    <div className="buttons">
                        <button onClick={handleAccept}>Accept</button>
                        <button onClick={handleReject}>Reject</button>
                        <button onClick={handleDownload}>Download</button>
                    </div>
                </article>
            )}
        </div>
    );
}

export default PendingDonor;
