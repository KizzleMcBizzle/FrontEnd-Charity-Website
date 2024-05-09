import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";


const ViewOrgsFetch = () => {
    
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
                  results = {orgs.filter(org => org.verified)} 
                  title='Registered Organizations'
                  type = 'adminViewOrgs'
                 />}
        
    </div>
  );
}
 
export default ViewOrgsFetch;