
import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const MedCase = () => {
  
const { error, isPending, data: medCases } = useFetch('http://localhost:4000/medCase')
  
    return (
      <div className="medCase">
        { error && <div>{ error }</div> }
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        { medCases && <FilterSideBar 
                      results={medCases}
                      title="Medical Cases"
                      type="medicalCase" /> }
      </div>
    );
  }
   
  export default MedCase;