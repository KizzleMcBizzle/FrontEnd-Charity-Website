import DonUseReq from "./DonUseReq";
import useFetch from "./useFetch";

const DonorReqFetch = () => {
    //custom hook, check useFetch.js
    const {data : donors, isPending, error} = useFetch('http://localhost:4000/donors');

  
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {donors && <DonUseReq donors = {donors} title='Users applications for pro-bono services' />}
    </div>
  );
}
 
export default DonorReqFetch;