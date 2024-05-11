import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const SchoolStationaryFetch = () => {
    //custom hook, check useFetch.js
    const {data : stationary, isPending, error} = useFetch('http://localhost:4000/stationaryItems');

  
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {stationary && <FilterSideBar 
                    results = {stationary}
                    title='School Stationary Items Donation Requests'
                    type = 'ViewSchoolStationary'
                    />}
    </div>
  );
}
 
export default SchoolStationaryFetch;