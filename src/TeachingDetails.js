import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TeachingDetails = () => {
  const { id } = useParams();
  const { data: teaching, error, isPending } = useFetch('http://localhost:4000/teaching/' + id);
  const history = useHistory();

  const handleClick = () => {
    alert(`You have fulfilled the request succesfully.`);
    history.push("/");
  }

  return (
    <div className="medical-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { teaching && (
        <article>
          <h2>{ teaching.title }</h2>
          <p>Number of Students: { teaching.number_of_students }</p>
          <div>Address: { teaching.address }</div>
          <a href={teaching.google_map_marker}>Location</a>
          <h3>Subjects:</h3>
          <ul>
            {teaching.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <button onClick={handleClick}>Fulfill The Request</button>
        </article>
      )}
    </div>
  );
}
 
export default TeachingDetails;