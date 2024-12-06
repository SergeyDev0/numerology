import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";

const PrivateRoute = (props) => {
  if (localStorage.getItem("accessToken")) {
     return <Outlet/>
  } else {
    return <Navigate to="/login" />;
  }
};
  
export default observer(PrivateRoute);