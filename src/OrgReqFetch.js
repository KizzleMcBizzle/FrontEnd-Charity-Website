import OrgUseReq from "./OrgUseReq";
import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";


const OrgReqFetch = () => {
    
    const {data : orgs, isPending, error} = useFetch('http://localhost:4000/orgs');
    
   
  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {orgs && <FilterSideBar 
                  results = {orgs.filter(org => !org.verified)} 
                  title='Organizations Requests'
                 />}
    </div>
  );
}
 
export default OrgReqFetch;