import {  useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useAuth} from './AuthProvider';

const TeachingDetails = () => {

  const navigate = useNavigate();

  const user = useAuth();
  const { id } = useParams();
  const { data: teach, error, isPending } = useFetch('http://localhost:4000/teaching/' + id);
  let flag = false;

  if( user.role && user.role.toLowerCase() === 'teacher'){
    flag = true;
  }

  const handleClick = () => {
    setTimeout(()=>{
      alert(`You have fulfilled the request succesfully.`);
    navigate("/donor");

    }, 1000)
    
  }

  return (
    <div className="organization-details bg-white shadow overflow-hidden sm:rounded-lg mx-4 my-4 p-4">
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {teach && (<>
        <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Pro-Bono Teaching Service
                </h3>   
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Title
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {teach.title}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Area
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {teach.area}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Governorate
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {teach.governorate}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Number of Students
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {teach.number_of_students}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {teach.address}
                                </dd>
                            </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Google Marker
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a href={teach.googleMapsUrl} className="mb-3">Google Maps</a>
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
                </dl>
            </div>


            
        </div>
        {flag && <button onClick={handleClick}
                                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Fulfill
        </button>}



        </>
    )}
</div>
);
}
 
export default TeachingDetails;