import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BloodDetails = () => {
  const { id } = useParams();
  const { data: blood, error, isPending } = useFetch('http://localhost:4000/blood/' + id);


  return (
    <div className="blood-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blood && (
        <article>
          <h2>Blood Donation Details</h2>
          <p>Patient Name: { blood.patient_name }</p>
          <p>Blood Type: { blood.blood_type }</p>
          <p>Hospital Name: { blood.hospital_name }</p>
          <p>Hospital Area: { blood.hospital_area }</p>
          <p>Governorate: { blood.governorate }</p>
          <p>Hospital Address: { blood.hospital_address }</p>
          <a href={blood.location}>Hospital Location</a>
        </article>
      )}
    </div>
  );
}
 
export default BloodDetails;