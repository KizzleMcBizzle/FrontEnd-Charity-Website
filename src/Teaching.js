import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const Teaching = () => {
const { error, isPending, data: teachings } = useFetch('http://localhost:4000/teaching')
  
    return (
      <div className="teaching">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { teachings && <FilterSideBar 
                          results={teachings} 
                          title="Teaching Posts"
                          type="teachingPosts"/> }
      </div>
    );
  }
   
  export default Teaching;