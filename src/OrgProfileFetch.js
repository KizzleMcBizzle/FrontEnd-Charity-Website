import OrgProfile from "./OrgProfile";
import useFetch from "./useFetch";
import { useAuth } from "./AuthProvider";

const OrgFetch = () => {
    const user = useAuth();

    const {data : org, isPending, error} = useFetch('http://localhost:4000/orgs/' + user.id);


    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {org && <OrgProfile org = {org} />}
        </div>
      );


    }
 
export default OrgFetch;