import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Reg from "./pages/auth/Reg";
import Subscribe from "./pages/subscribe/Subscribe";
import Menu from "./pages/menu/Menu";
import Matrix from "./pages/menuItem/matrix/Matrix";
import Calendar from "./pages/menuItem/calendar/Calendar";
import Compatibility from "./pages/menuItem/compatibility/Compatibility";
import Prognosis from "./pages/menuItem/prognosis/Prognosis";
import Periods from "./pages/menuItem/periods/Periods";
import authStore from "./stores/authStore";

function App() {
  React.useEffect(() => {
    const refreshToken = () => {
      if(localStorage.getItem('accessToken')) {
        let data = {

        }
    
        let config = {
          method: 'post',
          url: 'https://api.amanatstore.com/doorway/refresh_tokens/',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
          data : JSON.stringify(data),
        }; 
    
        axios.request(config)
        .then((response) => {
          if(response.data.status !== "error") {
            authStore.saveAccessToken(response.data.data.jwt_access_token);
            authStore.saveRefreshToken(response.data.data.jwt_refresh_token);
          } else {
            authStore.logout();
            window.location.reload();
          }
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }

    refreshToken()
    authStore.callRefreshFunc(refreshToken);
    }, [])

  React.useEffect(() => {
    authStore.loadTokens();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/prognosis" element={<Prognosis />} />
        <Route path="/periods" element={<Periods />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;