import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MedSuppDetails = () => {
  const { id } = useParams();
  const { data: medSupp, error, isPending } = useFetch('http://localhost:4000/medicalSupp/' + id);
  const history = useHistory();

  const handleClick = () => {
    alert(`You have donated succesfully`);
    history.push("/");
  }

  return (
    <div className="medSupp-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { medSupp && (
        <article>
          <h2>Device Type: { medSupp.type }</h2>  
          <p>Use: { medSupp.use }</p>
          <img src={ medSupp.image } alt={ medSupp.title } />
          <p>Quantity: { medSupp.quantity }</p>
          <label htmlFor="quantity">Quantity to Donate:</label>
          <input type="number" id="quantity" name="quantity" min="1" />
          <button onClick={handleClick}>Donate</button>
        </article>
      )}
    </div>
  );
}
 
export default MedSuppDetails;