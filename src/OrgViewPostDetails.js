import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming this is the correct import for useFetch
import { saveAs } from 'file-saver';
import Modal from 'react-modal';
import {XCircleIcon} from "@heroicons/react/16/solid";
import OrgMedicationPost from './OrgMedicationPost'
import OrgClothesPost from './OrgClothesPost'
import OrgToysPost from './OrgToysPost';
import OrgBookPost from './OrgBookPost'
import OrgStationaryPost from './OrgStationaryPost'
import OrgFoodPost from './OrgFoodPost'
import OrgBloodPost from './OrgBloodPost'
import OrgMedCasePost from './OrgMedCasePost'
import OrgMedEquipPost from './OrgMedEquipPost'
import OrgMedDevicePost from './OrgMedDevicePost'
import OrgTeachingPost from './OrgTeachingPost'


const OrgViewPostDetails = () => {
    const { id } = useParams();
    const { data: post, error, isPending } = useFetch('http://localhost:4000/DonationPosts/' + id);
    let page = <></>;

    

    if(post){
        switch (post.category.toLowerCase()) {
            case "medication":
                page = <OrgMedicationPost id={post.objectID} status={post.status}/>
                break;
            case "clothes":
                page = <OrgClothesPost id={post.objectID} status={post.status}/>
                break;
            case "toys":
                page = <OrgToysPost id={post.objectID} status={post.status}/>
                break;
            case "books":
                page = <OrgBookPost id={post.objectID} status={post.status}/>
                break;
            case "stationaryitems":
                page = <OrgStationaryPost id={post.objectID} status={post.status}/>
                break;
            case "food":
                page = <OrgFoodPost id={post.objectID} status={post.status}/>
                break;
            case "blood":
                page = <OrgBloodPost id={post.objectID} status={post.status}/>
                break;
            case "medcase":
                page = <OrgMedCasePost id={post.objectID} status={post.status}/>
                break;
            case "medicalequipment":
                page = <OrgMedEquipPost id={post.objectID} status={post.status}/>
                break;
            case "medicaldevices":
                page = <OrgMedDevicePost id={post.objectID} status={post.status}/>
                break;
            case "teaching":
                page = <OrgTeachingPost id={post.objectID} status={post.status}/>;
                break;
            default:
                page = <OrgMedicationPost id={post.objectID} status={post.status}/>
                break;
        }
    }

    return(
        <div className="page">
            {error && <div>{ error }</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
            {post && 
            <div className="page">
                {page}
            </div>
            };
        </div>
    );

}

export default OrgViewPostDetails;