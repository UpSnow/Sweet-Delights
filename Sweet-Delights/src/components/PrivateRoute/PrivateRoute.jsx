
import { Navigate,useLocation } from "react-router-dom"; // qual é a diferença do navigate para p useNavigate
import { useAuth } from "../../context/AuthContext";


const PrivateRoute = ({children}) =>{
     const {isAuthenticated} = useAuth();
     const location = useLocation();


     if(!isAuthenticated){
        return <Navigate to= "/login" state={{from: location}} replace></Navigate> // como isso funciona
     } // o que o replace faz?
      return children
}

export default PrivateRoute