import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";



const ToyDonReqFetch = () => {
    
  const {data : toys, isPending, error} = useFetch('http://localhost:4000/toys');
    
   
  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {toys && <FilterSideBar 
                  results = {toys}
                  title='Toy Donation Requests'
                  type = 'ToyDonReq'
                 />}
        
    </div>
  );
}
 
export default ToyDonReqFetch;