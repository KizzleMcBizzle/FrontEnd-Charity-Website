
import useFetch from "./useFetch";
import TeachingList from "./TeachingList";

const Teaching = () => {
  
const { error, isPending, data: teachings } = useFetch('http://localhost:4000/teaching')
  
    return (
      <div className="teaching">
        <h2>Teaching Posts</h2>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { teachings && <TeachingList teachings={teachings} /> }
      </div>
    );
  }
   
  export default Teaching;