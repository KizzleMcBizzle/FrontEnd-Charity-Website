import ChangePassword from "./ChangePassword";
import useFetch from "./useFetch";
import { useAuth } from "./AuthProvider";

const AdminFetch = () => {
    
    const user = useAuth();

    const url = "donors/" + user.id;
    const {data : donor, isPending, error} = useFetch('http://localhost:4000/' + url);

    const onPasswordChange = () => {
        window.location.reload();
    }


    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {donor && <ChangePassword user = {donor} onPasswordChange={onPasswordChange} url ={url} />}
        </div>
      );


    }
 
export default AdminFetch;