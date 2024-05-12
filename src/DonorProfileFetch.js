import DonorProfile from "./DonorProfile";
import useFetch from "./useFetch";
import { useAuth } from "./AuthProvider";

const DonorFetch = () => {
    const user = useAuth();

    const {data : donor, isPending, error} = useFetch('http://localhost:4000/donors/' + user.id);


    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {donor && <DonorProfile donor = {donor} />}
        </div>
      );


    }
 
export default DonorFetch;