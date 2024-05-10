import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MedCaseDetails = () => {
  const { id } = useParams();
  const { data: medCase, error, isPending } = useFetch('http://localhost:4000/medCase/' + id);
  const history = useHistory();

  const handleClick = () => {
    alert(`You have fulfilled the request succesfully.`);
    history.push("/");
  }

  return (
    <div className="medCase-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { medCase && (
        <article>
        <h2>Medical Case Details</h2>
        <p>Patient Name: { medCase.patient_name }</p>
        <p>Age: { medCase.age }</p>
        <p>Gender: { medCase.gender }</p>
        <p>Weight: { medCase.weight }</p>
        <p>Address: { medCase.address }</p>
        <p>Organization Name: { medCase.organizationName }</p>
        <p>Medical Speciality: { medCase.medicalSpecialty }</p>
        <p>Governorate: { medCase.governorate }</p>
        <p>Area: { medCase.area }</p>
        <a href={medCase.location}>Location</a>
        <button onClick={handleClick}>Fulfill The Request</button>
      </article>
      )}
    </div>
  );
}
 
export default MedCaseDetails;