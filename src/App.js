import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Inscricao from './components/pages/Inscricao'
import Python from './components/pages/cursos/Python'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'
import './style/matricula.css'
import './style/curso.css'

import 'animate.css/animate.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
        {/* <Route path="/redefinirSenha" element={<Home />} /> */}
        <Route path="/curso/" element={<Python />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
