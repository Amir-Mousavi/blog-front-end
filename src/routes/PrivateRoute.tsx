import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }: any) {
  const user = useSelector((state: any) => state.auth.user);

  return user ? children : <Navigate {...rest} to="signin" />;
}
