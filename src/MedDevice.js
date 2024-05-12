import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const MedDevice = () => {
 
const { error, isPending, data: medDevices } = useFetch('http://localhost:4000/medicalDevices')
  
    return (
      <div className="medDevice">
        { error && <div>{ error }</div> }
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        { medDevices && <FilterSideBar
                      results={medDevices}
                      title="Medical Devices Requests"
                      type="medDevice" /> }
      </div>
    );
  }
   
  export default MedDevice;