import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getProfile, logoutUser } from "../../../services/auth.service";

export default function ProtectedRoute() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      const hasTabSession = sessionStorage.getItem("tabAuthenticated") === "true";

      if (!hasTabSession) {
        try {
          await logoutUser();
        } catch {
          // Ignore API errors; route will still be blocked below.
        }
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        await getProfile();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-(--bg-light)">
        <p className="text-(--slate-500) font-medium">Checking session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/error" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}