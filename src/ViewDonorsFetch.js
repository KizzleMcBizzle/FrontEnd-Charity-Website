import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const ViewDonorsFetch = () => {
    //custom hook, check useFetch.js
    const {data : donors, isPending, error} = useFetch('http://localhost:4000/donors');

  
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {donors && <FilterSideBar 
                    results = {donors.filter(donor => donor.verified)}
                    title='Registered Donors'
                    type = 'adminViewDonors'
                    />}
    </div>
  );
}
 
export default ViewDonorsFetch;