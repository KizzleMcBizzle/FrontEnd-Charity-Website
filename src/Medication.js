
import useFetch from "./useFetch";
import MedicationList from "./MedicationList";

const Medication = () => {
 
const { error, isPending, data: medications } = useFetch('http://localhost:4000/medication')
  
    return (
      <div className="medication">
        <h2>Medication Requests</h2>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { medications && <MedicationList medications={medications} /> }
      </div>
    );
  }
   
  export default Medication;