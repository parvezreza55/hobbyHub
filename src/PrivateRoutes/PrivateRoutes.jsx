import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="text-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      </>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to={"/auth/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
