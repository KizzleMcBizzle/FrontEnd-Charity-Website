import React, { useState, useEffect } from 'react';
import Logo from './Logo.png';
import './index.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ClipLoader } from 'react-spinners';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function DonorReg() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [volunteer, setVolunteer] = useState(false);
    const [role, setRole] = useState('Regular');
    const [clinicLocation, setClinicLocation] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [proBonoCases, setProBonoCases] = useState('');
    const [verified, setVerified] = useState(false);
    const [subjects, setSubjects] = useState('');
    const [proBonoClasses, setProBonoClasses] = useState('');
    const [proBonoStudents, setProBonoStudents] = useState('');
    const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [document, setDocument] = useState('');

    const handleFileUpload = (event) => {
        setLoading(true);
        setTimeout(() => {
            setFileName(event.target.files[0].name);
            const fileName = `${firstName}_document`;
            setDocument(fileName);
            setLoading(false);
        }, 2000);
    };

    function useScript(src) {
        useEffect(() => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        }, [src]);
    }

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = {
            firstName, lastName, verified, email, password, contactNumber, address, area, governorate,
            role, clinicLocation, specialty, proBonoCases, subjects, proBonoClasses,
            proBonoStudents, document
        };
        console.log(regobj);
        fetch("http://localhost:4000/donors", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Registered successfully.')
            toast.success('Registered successfully.')
            setTimeout(() => {
                navigate('/signin');
            }, 3000);
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="donor-reg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src={Logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register as a Donor
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handlesubmit}>
                    {/* ... input fields ... */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <input id="firstName" name="firstName" type="text" required
                               value={firstName} onChange={(e) => setFirstName(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <input id="lastName" name="lastName" type="text" required
                               value={lastName} onChange={(e) => setLastName(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            Gender
                        </label>
                        <select id="gender" name="gender" required
                                onChange={(e) => setGender(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6">
                            <option value="" disabled selected>Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <input id="email" name="email" type="email" required
                               value={email} onChange={(e) => setEmail(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <input id="password" name="password" type="password" required
                               value={password} onChange={(e) => setPassword(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Contact Number
                        </label>
                        <input id="contactNumber" name="contactNumber" type="tel" required
                               value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                            Address
                        </label>
                        <input id="address" name="address" type="text" required
                               value={address} onChange={(e) => setAddress(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
                            Area
                        </label>
                        <input id="area" name="area" type="text" required
                               value={area} onChange={(e) => setArea(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <label htmlFor="governorate" className="block text-sm font-medium leading-6 text-gray-900">
                            Governorate
                        </label>
                        <input id="governorate" name="governorate" type="text" required
                               value={governorate} onChange={(e) => setGovernorate(e.target.value)}
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="volunteer" name="volunteer" checked={volunteer}
                               onChange={(e) => setVolunteer(e.target.checked)}
                               className="form-checkbox h-5 w-5 text-custom-green"/>
                        <label htmlFor="volunteer" className="ml-2 text-sm text-gray-900">I want to volunteer for a
                            role</label>
                    </div>
                    {volunteer && (
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                                Role
                            </label>
                            <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6">
                                <option value="">Select a role...</option>
                                <option value="doctor">Doctor</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>
                    )}
                    {volunteer && role === 'doctor' && (
    <>
        <div>
            <label htmlFor="clinicLocation" className="block text-sm font-medium leading-6 text-gray-900">
                Clinic Location
            </label>
            <input id="clinicLocation" name="clinicLocation" type="text" required
                   value={clinicLocation} onChange={(e) => setClinicLocation(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
        </div>
        <div>
            <label htmlFor="specialty" className="block text-sm font-medium leading-6 text-gray-900">
                Specialty
            </label>
            <input id="specialty" name="specialty" type="text" required
                   value={specialty} onChange={(e) => setSpecialty(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
        </div>
        <div>
            <label htmlFor="proBonoCases" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Pro-Bono Cases
            </label>
            <input id="proBonoCases" name="proBonoCases" type="number" min="0" required
                   value={proBonoCases} onChange={(e) => setProBonoCases(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
        </div>
        {mapLoaded && (
            <div>
                <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
                    Google Marker
                </label>
                <div className="relative h-64 w-full rounded-md overflow-hidden">
                    <LoadScript googleMapsApiKey="AIzaSyDAEp4t2VGfhtTwzdOlhpHEs-7v8N8iG7w">
                        <GoogleMap
                            mapContainerStyle={{height: "100%", width: "100%"}}
                            center={{lat: -34.397, lng: 150.644}}
                            zoom={8}
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
    </>
)}
{volunteer && role === 'teacher' && (
    <>
        <div>
            <label htmlFor="subjects" className="block text-sm font-medium leading-6 text-gray-900">
                Subject(s) (if multiple separate by commas)
            </label>
            <input id="subjects" name="subjects" type="text" required
                   value={subjects} onChange={(e) => setSubjects(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
        </div>
        <div>
            <label htmlFor="proBonoClasses" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Pro-Bono Classes
            </label>
            <input id="proBonoClasses" name="proBonoClasses" type="number" min="0" required
                   value={proBonoClasses} onChange={(e) => setProBonoClasses(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
        </div>
        <div>
            <label htmlFor="proBonoStudents" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Pro-Bono Students
            </label>
            <input id="proBonoStudents" name="proBonoStudents" type="number" min="0" required
                   value={proBonoStudents} onChange={(e) => setProBonoStudents(e.target.value)}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"/>
        </div>
    </>
)}
{volunteer && (
    <div>
        <label htmlFor="donorDocument" className="block text-sm font-medium leading-6 text-gray-900">
            Document Upload for Donor Verification
        </label>
        <input id="donorDocument" name="donorDocument" type="file" required
               className="hidden" onChange={handleFileUpload}/>
        <label htmlFor="donorDocument"
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-blue sm:text-sm sm:leading-6 cursor-pointer bg-custom-blue text-center">
            Choose File
        </label>
        {loading ? <ClipLoader/> : fileName &&
            <p className="text-sm text-gray-500 mt-2">Uploaded file: {fileName}</p>}
        <p className="text-sm text-gray-500 mt-4">
            As a Donor, upload document(s) to prove that you are a doctor or teacher so that you can verify your qualifications and contribute to relevant initiatives, ensuring that your skills are utilized appropriately.
        </p>
    </div>
)}
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