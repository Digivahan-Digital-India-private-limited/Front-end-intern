import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { getSessionUser } from "../services/authSessionApi";

const UserProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = Cookies.get("user_token");

  const {
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user-session"],
    queryFn: getSessionUser,
    enabled: Boolean(token),
    retry: false,
    staleTime: 60 * 1000,
  });

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
          Validating session...
        </div>
      </div>
    );
  }

  if (isError) {
    const statusCode = error?.response?.status;
    if (statusCode === 401 || statusCode === 403) {
      Cookies.remove("user_token");
      localStorage.removeItem("marketplace_capabilities");
      localStorage.removeItem("user_login_phone");
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  }

  return children || <Outlet />;
};

export default UserProtectedRoute;
