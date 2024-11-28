import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Reg from "./pages/auth/Reg";
import Subscribe from "./pages/subscribe/Subscribe";
import Menu from "./pages/menu/Menu";
import Matrix from "./pages/menuItem/matrix/Matrix";

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;