import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming this is the correct import for useFetch
import { saveAs } from 'file-saver';


const PendingOrg = () => {
    const { id } = useParams();
    const { data: org, error, isPending } = useFetch('http://localhost:4000/orgs/' + id);
    const history = useHistory();


    const handleAccept = () => {
        fetch('http://localhost:4000/orgs/' + org.id, {
            method: 'PUT', // Assuming this updates the organization's status to accepted
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...org, verified: true }) // Update the status field to 'accepted'
        }).then(() => {
            console.log('Organization accepted!');
            history.push('/admin/orgReq');
        });
    };

    const handleReject = () => {
        fetch('http://localhost:4000/orgs/' + org.id, {
            method: 'DELETE',
        }).then(() => {
            console.log('Organization deleted!') 
            history.push('/admin/orgReq');
        });
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
        
        
        <div className="organization-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {org && (
                <article>
                    <h2>{org.organizationName}</h2>
                    <p><strong>Name:</strong> {org.firstName} {org.lastName}</p>
                    <p><strong>Email:</strong> {org.email}</p>
                    <p><strong>Contact Number:</strong> {org.contactNumber}</p>
                    <p><strong>Organization Type:</strong> {org.organizationType}</p>
                    <p><strong>Organization Address:</strong> {org.organizationAddress.area}, {org.organizationAddress.governorate}</p>
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

export default PendingOrg;
