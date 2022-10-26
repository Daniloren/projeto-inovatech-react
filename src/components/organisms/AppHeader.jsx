import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../image/LogoNovo.png'

import perfil from "../../image/perfil.png";
import { useLocation } from "react-router-dom";
{/* eslint jsx-a11y/anchor-is-valid : 0 */}

export default function AppHeader() {
  const location = useLocation();
  const [user, setUser] = React.useState(location.state);
  console.log(location);

  const [userLogged, setUserLogged] = React.useState(user ? true : false);

  const logoff = () => {
    setUserLogged(false);
    setUser(null);
  };

  return (
    <div>
      <header className="p-2 text-bg-dark">
      <div className="container-flex">
        <div
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              className="bi me-2"
              width="100"
              height="100"
              src={logo}
              alt="Logo Inova Tech esverdeado"
            />
          </Link>


          <ul
            className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
          >
            <li><Link to="/" className="nav-link px-2 text-white">Inicio</Link></li>
            <li><Link to="/curso" className="nav-link px-2 text-white">Cursos</Link></li>

            <li><a href="#" className="nav-link px-2 text-white">Contato</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Sobre</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Buscar..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              <Link to="/login">Login</Link>
            </button>
            <button type="button" className="btn btn-outline-light">
              <Link to="/inscricao">Matrícula</Link>
            </button>
          </div>

          <div className={userLogged ? "text-end" : "hidden"}>
              <a href="">
                <img src={perfil} className="perfil m-3" alt='' />
              </a>
              <a href="#" onClick={() => logoff()}>
                desconectar
              </a>
            </div>
        </div>
      </div>
    </header>
    </div>
  )
}
