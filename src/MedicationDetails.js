import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MedicationDetails = () => {
  const { id } = useParams();
  const { data: medication, error, isPending } = useFetch('http://localhost:4000/medication/' + id);

  

  return (
    <div className="medication-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { medication && (
        <article>
          <h2>Medication Name: {medication.name}</h2>
          <p>Use: { medication.use }</p>
        </article>
      )}
    </div>
  );
}
 
export default MedicationDetails;