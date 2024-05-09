
import useFetch from "./useFetch";
import MedCaseList from "./MedCaseList";

const MedCase = () => {
  
const { error, isPending, data: medCases } = useFetch('http://localhost:4000/medCase')
  
    return (
      <div className="medCase">
        <h2>Medical Cases</h2>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { medCases && <MedCaseList medCases={medCases} /> }
      </div>
    );
  }
   
  export default MedCase;