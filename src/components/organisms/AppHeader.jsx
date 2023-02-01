import React from "react";

import { Link, redirect, useNavigate } from "react-router-dom";
import logo from "../../image/LogoNovo.png";

import perfil from "../../image/perfil.png";
import { useLocation } from "react-router-dom";

{
  /* eslint jsx-a11y/anchor-is-valid : 0 */
}

export default function AppHeader() {
  const location = useLocation();
  const user = localStorage.getItem("user");
  const [userLogged, setUserLogged] = React.useState(user ? true : false);

  const [pesquisa, setPesquisa] = React.useState(
    !location.state || !location.state.pesquisa ? "" : location.state.pesquisa
  );
  const navigate = useNavigate();

  //Manipula evento no formulario de pesquisa
  const handleFormSubmit = (event) => {
    //Interrompe comportamento padrão do form HTML
    event.preventDefault();

    //redireciona para página do curso solicitado. Ex.: curso/HTML
    navigate("/curso/" + pesquisa);
    //window.location = url;
  };

  const logoff = () => {
    console.log("1");
    localStorage.removeItem("user");
    console.log("user: ", user);
    setUserLogged(false);
    navigate("/");
  };

  return (
    <div>
      <header className="p-2 text-bg-dark">
        <div className="container-flex">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              state={location.state}
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

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  to="/"
                  state={location.state}
                  className="nav-link px-2 text-white"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Sobre
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
              onSubmit={handleFormSubmit}
            >
              <input
                type="search"
                onChange={(event) => setPesquisa(event.target.value)}
                id="pesquisa"
                name="pesquisa"
                value={pesquisa}
                className="form-control form-control-dark text-bg-dark"
                placeholder="Buscar..."
                aria-label="Search"
              />
            </form>

            <div className={userLogged ? "hidden" : "text-end"}>
              <button type="button" className="btn btn-outline-light me-2">
                <Link to="/login">Login</Link>
              </button>
              <button type="button" className="btn btn-outline-light">
                <Link to="/inscricao">Matrícula</Link>
              </button>
            </div>

            <div className={userLogged ? "text-end" : "hidden"}>
              <Link to="/perfil">
                <img src={perfil} className="perfil m-3" alt="" />
              </Link>
              <a href="#" onClick={() => logoff()}>
                desconectar
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
