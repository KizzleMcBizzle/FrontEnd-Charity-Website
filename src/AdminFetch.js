import AdminProfile from "./AdminProfile";
import useFetch from "./useFetch";

const AdminFetch = () => {
    
    const {data : admin, isPending, error} = useFetch('http://localhost:4000/admin/1');


    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {admin && <AdminProfile admin = {admin} />}
        </div>
      );


    }
 
export default AdminFetch;