import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const Medication = () => {
 
const { error, isPending, data: medications } = useFetch('http://localhost:4000/medication')
  
    return (
      <div className="medication">
        { error && <div>{ error }</div> }
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        { medications && <FilterSideBar 
                          results={medications} 
                          title="Medication Requests"
                          type="medicationReq"/> }
      </div>
    );
  }
   
  export default Medication;