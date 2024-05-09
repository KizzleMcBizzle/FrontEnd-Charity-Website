
import useFetch from "./useFetch";
import MedSuppList from "./MedSuppList";

const MedSupp = () => {

const { error, isPending, data: medSupps } = useFetch('http://localhost:4000/medicalSupp')
  
    return (
      <div className="medSupp">
        <h2>Medical Supplies</h2>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { medSupps && <MedSuppList medSupps={medSupps} /> }
      </div>
    );
  }
   
  export default MedSupp;