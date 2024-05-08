import DonUseReq from "./DonUseReq";
import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const DonorReqFetch = () => {
    //custom hook, check useFetch.js
    const {data : donors, isPending, error} = useFetch('http://localhost:4000/donors');

  
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {donors && <FilterSideBar 
                    results = {donors.filter(donor => !donor.verified)}
                    title='Pro-bono Donors Requests'
                    />}
    </div>
  );
}
 
export default DonorReqFetch;