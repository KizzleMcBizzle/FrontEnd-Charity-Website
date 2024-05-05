import OrgUseReq from "./OrgUseReq";
import useFetch from "./useFetch";

const OrgReqFetch = () => {
    
    const {data : orgs, isPending, error} = useFetch('http://localhost:4000/orgs');


  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending && <div>Loading...</div>}
        {orgs && <OrgUseReq orgs = {orgs} title='Organizations requests to join the platform' />}
    </div>
  );
}
 
export default OrgReqFetch;