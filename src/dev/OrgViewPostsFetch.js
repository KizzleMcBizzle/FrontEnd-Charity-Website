import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";
import OrgViewPosts from './OrgViewPosts';


const ViewOrgsFetch = () => {
    
  const {data : posts, isPending, error} = useFetch('http://localhost:4000/DonationPosts');
    
   
  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {posts &&  <OrgViewPosts posts = {posts}/>}
        
    </div>
  );
}
 
export default ViewOrgsFetch;