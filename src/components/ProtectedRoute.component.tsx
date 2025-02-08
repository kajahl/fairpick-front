import { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/Auth.context";

type ProtectedRouteProps = {
  element: JSX.Element;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  if (authContext.isLoading == true) return <div>Loading...</div>;

  if (authContext.isAuthenticated == false) {
    navigate("/");
    return <></>;
  }

  return element;
};

export default ProtectedRoute;
