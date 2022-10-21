import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

import "animate.css/animate.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/redefinirSenha" element={<Home />} />
        {/* <Route path="/curso/:id" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
