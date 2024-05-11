import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MedDeviceDetails = () => {
  const { id } = useParams();
  const { data: medDevice, error, isPending } = useFetch('http://localhost:4000/medicalDevices/' + id);

  

  return (
    <div className="medDevice-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { medDevice && (
        <article>
          <h2>Medication Name: {medDevice.type}</h2>
          <p>Use: { medDevice.use }</p>
          <p>Quantity: { medDevice.quantity }</p>
        </article>
      )}
    </div>
  );
}
 
export default MedDeviceDetails;