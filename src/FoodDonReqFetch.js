import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";



const FoodDonReqFetch = () => {
    
  const {data : food, isPending, error} = useFetch('http://localhost:4000/food');
    
   
  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {food && <FilterSideBar 
                  results = {food}
                  title='Food Donation Requests'
                  type = 'FoodDonReq'
                 />}
        
    </div>
  );
}
 
export default FoodDonReqFetch;