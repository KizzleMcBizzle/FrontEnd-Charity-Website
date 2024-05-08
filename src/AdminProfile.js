import {Link} from 'react-router-dom';

const AdminProfile = ({admin}) => {
    
   
    
    const passSize = admin.password.length;
    const passwordEncrypted = '*'.repeat(passSize);

    return ( 
        <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about the user.
            </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        { admin.name }
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Username
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {admin.username}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        { admin.email }
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Password
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between items-center">
                        <span>{ passwordEncrypted }</span> 
                        <Link to="/admin/changepass">
                            <button className="mr-14 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green transition duration-200 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">Change Password</button>
                        </Link>
                    </dd>
                </div>
            </dl>
        </div>
    </div>  
    );
}
 
export default AdminProfile;