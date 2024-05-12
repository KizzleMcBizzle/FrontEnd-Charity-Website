import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from './AuthProvider'

const DonorProfile = ({ donor }) => {
    const passSize = donor.password.length;
    const passwordEncrypted = '*'.repeat(passSize);
    const user = useAuth();
    const navigate = useNavigate();

    let teach = false;
    let doctor = false

    if(user.role.toLowerCase() === 'doctor')
        doctor = true;
    else if(user.role.toLowerCase() === 'teacher')
        teach = true;

    return (<>
        <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Your Profile
            </h3>
           
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
                
                
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Address
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.address}
</dd>
</div>
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Area
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.area}
</dd>
</div>
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Governorate
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.governorate}
</dd>
</div>

{ doctor && <dl className="sm:divide-y sm:divide-gray-200">
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Clinic Location
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a href={donor.googleMapsUrl} className="mb-3">Google Maps</a>
                            <iframe
                                width="600"
                                height="450"
                                frameBorder="0"
                                style={{border: 0}}
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDAEp4t2VGfhtTwzdOlhpHEs-7v8N8iG7w&q=29.987350, 31.438084"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </dd>
                    </div>
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Specialty
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.specialty}
</dd>
</div>
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Pro Bono Cases
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.proBonoCases}
</dd>
</div></dl>
}
{teach && <dl className="sm:divide-y sm:divide-gray-200">
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Subjects
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.subjects}
</dd>
</div>
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Pro Bono Classes
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.proBonoClasses}
</dd>
</div>
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
<dt className="text-sm font-medium text-gray-500">
Pro Bono Students
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
{donor.proBonoStudents}
</dd>
</div></dl>
}
<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Password
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between items-center">
                            <span>{passwordEncrypted}</span>
                            <Link to="/donor/changepass">
                                <button className="mr-14 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green transition duration-200 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">Change Password</button>
                            </Link>
                        </dd>
                    </div>
            </dl>
        </div>

    

    </div>

    <button onClick={() => user.logOut()}
        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Delete Account
</button>
</>
    )}





export default DonorProfile;
