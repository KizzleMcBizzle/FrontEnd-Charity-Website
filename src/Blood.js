import useFetch from "./useFetch";
import BloodList from "./BloodList";
import FilterSideBar from "./FilterSideBar";

const Blood = () => {
 
const { error, isPending, data: bloods } = useFetch('http://localhost:4000/blood')
  
    return (
      <div className="blood">
        <h2>Blood Donation Requests</h2>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { bloods && <FilterSideBar 
                      results={bloods}
                      title="Blood Donation Requests"
                      type="bloodDonations" /> }
      </div>
    );
  }
   
  export default Blood;