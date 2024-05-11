import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [id,setID] = useState(null);
  const navigate = useNavigate();


  const loginAction = async (data) => {
    try {
        const response = await fetch("http://localhost:4000/user/" + data.email, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = await response.json();
        if (res && res.password === data.password) {
            console.log(res);
            setRole(res.role);
            setID(res.objectID);
            if(role === 'admin')
                navigate("/admin");
            if(role === 'Regular' || role === 'doctor' || role === 'teacher')
                navigate("/donor");
            if(role ==='organization')
                navigate("/org")
            return;
        }
        throw new Error(res.message);
    } catch (err) {
        console.error(err);
    }
};


  const logOut = () => {
    setRole(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ id , role, loginAction, logOut}}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};