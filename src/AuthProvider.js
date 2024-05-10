import { useContext, createContext,  useState } from "react";
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const history = useHistory();
    const loginAction = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        if(user.role === 'admin')
            history.push("/admin")
        else
            history.push("/")
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    history.push("/");
  };
  
  
    return( <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
            </AuthContext.Provider>);


};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};