import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function ProtectedRoute({ children }) {
  const { data: user, isPending, isError, error } = useUser();
  console.log(user);
  if (isPending) return <p>Loading...</p>;
  if (isError || !user) {
    console.log(error);
    return <Navigate to="/login" replace />;
  }
  return children;
}
