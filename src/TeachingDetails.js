import {  useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TeachingDetails = () => {
  const { id } = useParams();
  const { data: teaching, error, isPending } = useFetch('http://localhost:4000/teaching/' + id);
  return (
    <div className="teaching-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { teaching && (
        <article>
          <h2>{ teaching.title }</h2>
          <p>Governorate:{teaching.governorate}</p>
          <p>Area: {teaching.area}</p>
          <p>Number of Students: { teaching.number_of_students }</p>
          <div>Address: { teaching.address }</div>
          <a href={teaching.google_map_marker}>Location</a>
          <p>Subject Name: {teaching.subjects}</p>
        </article>
      )}
    </div>
  );
}
 
export default TeachingDetails;