import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";
import MedEquipList from "./MedEquipList";

const MedEquip = () => {
 
const { error, isPending, data: medEquips } = useFetch('http://localhost:4000/medicalEquipment')
  
    return (
      <div className="medEquipment">
        { error && <div>{ error }</div> }
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        { medEquips && <MedEquipList medEquips={medEquips}></MedEquipList>}
      </div>
    );
  }
   
  export default MedEquip;