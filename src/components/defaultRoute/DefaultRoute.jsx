import { Navigate, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";

const DefaultRoute = (props) => {

  if (localStorage.getItem("accessToken")) {
     return <Navigate to="/home" />;
  } else {
    return <Navigate to="/login" />;
  }
};
  
export default observer(DefaultRoute);