import React, {useState, useEffect} from 'react';
import Logo from './Logo.png';
import './index.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ClipLoader } from 'react-spinners';

export default function OrgReg() {
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleFileUpload = (event) => {
        setLoading(true);
        setTimeout(() => {
            setFileName(event.target.files[0].name);
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUJWRIxsDjUetd8qHzIOXEsD6CUUJJS9Q&libraries=places`;
        script.async = true;
        script.onload = () => setMapLoaded(true);
        document.body.appendChild(script);
    }, []);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="org-reg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src={Logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register your organization
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <input id="firstName" name="firstName" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <input id="lastName" name="lastName" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            Gender
                        </label>
                        <select id="gender" name="gender" required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6">
                            <option value="">Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <input id="email" name="email" type="email" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <input id="password" name="password" type="password" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Contact Number
                        </label>
                        <input id="contactNumber" name="contactNumber" type="tel" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="orgName" className="block text-sm font-medium leading-6 text-gray-900">
                            Organization Name
                        </label>
                        <input id="orgName" name="orgName" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="orgType" className="block text-sm font-medium leading-6 text-gray-900">
                            Organization Type
                        </label>
                        <input id="orgType" name="orgType" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="orgAddress" className="block text-sm font-medium leading-6 text-gray-900">
                            Organization Address
                        </label>
                        <input id="orgAddress" name="orgAddress" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
                            Area
                        </label>
                        <input id="area" name="area" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="governorate" className="block text-sm font-medium leading-6 text-gray-900">
                            Governorate
                        </label>
                        <input id="governorate" name="governorate" type="text" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    {/* This is supposed to be the Google Maps marker, but it's not working
                     will try and fix it later*/}
                    {mapLoaded && (
                        <div>
                            <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
                                Google Marker
                            </label>
                            <div className="relative h-64 w-full rounded-md overflow-hidden">
                                <LoadScript googleMapsApiKey="AIzaSyCUJWRIxsDjUetd8qHzIOXEsD6CUUJJS9Q">
                                    <GoogleMap
                                        mapContainerStyle={{height: "100%", width: "100%"}}
                                        center={{lat: -34.397, lng: 150.644}}
                                        zoom={8}
                                        className="absolute top-0 left-0 w-full h-full"
                                    >
                                        <Marker
                                            position={markerPosition}
                                            onDragEnd={(event) => {
                                                setMarkerPosition({lat: event.latLng.lat(), lng: event.latLng.lng()});
                                            }}
                                            draggable={true}
                                        />
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    )}
                    <div>
                        <label htmlFor="orgDocument" className="block text-sm font-medium leading-6 text-gray-900">
                            Document Upload for Organization Verification
                        </label>
                        <input id="orgDocument" name="orgDocument" type="file" required
                               className="hidden" onChange={handleFileUpload}/>
                        <label htmlFor="orgDocument"
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6 cursor-pointer bg-custom-blue text-center">
                            Choose File
                        </label>
                        {loading ? <ClipLoader/> : fileName &&
                            <p className="text-sm text-gray-500 mt-2">Uploaded file: {fileName}</p>}
                        <p className="text-sm text-gray-500 mt-4">
                            As an Organization representative, upload document(s) to prove that you are a part of this
                            organization and that it is what it claims to be (school/hospital/church/mosque/non-profit)
                            to establish trust and credibility within the platform's community, facilitating partnership
                            opportunities and resource mobilization.
                        </p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-500 ease-in-out hover:scale-105"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}