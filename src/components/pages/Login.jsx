import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";

import logo from "../../image/LogoNovo.png";
//import "../../style/login.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const onDismiss = () => setVisible(false);
  const navigate = useNavigate();

  //Adiciona o usuário logado ao State do React
  const loggedUser = (user) => {
    user.senha = "";
    console.log("usuario logado:", user);
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  };

  //faz o processo de login
  const handleFormSubmit = (event) => {
    //interrompe o submit padrão do html
    event.preventDefault();

    //Faz chamada na API no endpoint de login para verificar se o usuário existe no BD
    //usa o process.env (ponto env) para gerenciar o link da api (desenvolvimento ou produção)
    fetch(process.env.REACT_APP_API_URL + "/login", {
      mode: "cors", //IMPORTANTE: Habilitamos o CORS para manter Back e Front em dominios separados
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, senha }),
    })
      .then((response) => {
        //Valida resposta da API. Se for OK, adiciona o Usuario ao State
        //Senão Mostra alerta com mensagem de erro
        if (response.ok) {
          return response.json();
          //loggedUser(response.json());
        } else {
          console.log("nok", response);
          setVisible(true);
          throw response.statusText;
        }
      })
      .then((response) => {
        loggedUser(response);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  //Renderiza HTML da página de Login
  return (
    <div className="div-login">
      <Alert
        color="danger"
        fade={true}
        isOpen={visible}
        toggle={onDismiss}
        className="alert-fixed"
      >
        Usuário ou senha inválidos
      </Alert>
      <main className="form-signin w-100 m-auto text-center">
        <form onSubmit={handleFormSubmit}>
          <Link to="/">
            <img
              className="mb-4"
              src={logo}
              alt="imagem do logo da escola inova tecnologia"
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="form-floating">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="form-label">
              Email
            </label>
          </div>
          <div className="form-floating">
            <input
              onChange={(event) => setSenha(event.target.value)}
              type="password"
              id="senha"
              name="senha"
              value={senha}
              className="form-control"
              placeholder="Senha"
            />
            <label htmlFor="floatingSenha" className="form-label">
              Senha
            </label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Lembre me
            </label>
          </div>
          <div className="text-center mb-3">
            <a href="/redefinirSenha" style={{ color: "#00ffff" }}>
              Esqueci minha senha
            </a>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Entrar
          </button>

          <hr />

          <p className="mt-5 mb-3 text-muted">&copy; 2022–2022</p>
        </form>
      </main>
    </div>
  );
}
