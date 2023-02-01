import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Inscricao from "./components/pages/Inscricao";
import Curso from "./components/pages/Curso";
import Perfil from "./components/pages/Perfil";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/matricula.css";
import "./style/curso.css";

import "animate.css/animate.min.css";
import AppHeader from "./components/organisms/AppHeader";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inscricao" element={<Inscricao />} />
          {/* <Route path="/redefinirSenha" element={<Home />} /> */}
          <Route path="/curso/:cursosId" element={<Curso />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
