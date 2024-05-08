import ChangePassword from "./ChangePassword";
import useFetch from "./useFetch";

const AdminFetch = () => {
    
    const url = "admin/1"
    const {data : admin, isPending, error} = useFetch('http://localhost:4000/admin/1');
    const onPasswordChange = () => {
        window.location.reload();
    }


    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {admin && <ChangePassword user = {admin} onPasswordChange={onPasswordChange} url ="admin/1" />}
        </div>
      );


    }
 
export default AdminFetch;