import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Reg from "./pages/auth/Reg";
import Subscribe from "./pages/subscribe/Subscribe";
import Menu from "./pages/menu/Menu";
import Matrix from "./pages/menuItem/matrix/Matrix";
import Calendar from "./pages/menuItem/calendar/Calendar";
import Compatibility from "./pages/menuItem/compatibility/Compatibility";

function App() {
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;