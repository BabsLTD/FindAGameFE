import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

const RequireAuth = ({ children, redirectTo }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
