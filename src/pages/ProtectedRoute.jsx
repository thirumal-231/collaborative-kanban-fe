import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function ProtectedRoute() {
  const { data: user, isPending, isError, error } = useUser();
  if (isPending) return <p>Loading...</p>;
  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
