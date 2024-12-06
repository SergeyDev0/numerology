import { Navigate, Outlet, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

const PublicRoute = (props) => {

  if (!localStorage.getItem("accessToken")) {
     return <Outlet/>
  } else {
    return <Navigate to="/home" />;
  }
};
  
export default observer(PublicRoute);