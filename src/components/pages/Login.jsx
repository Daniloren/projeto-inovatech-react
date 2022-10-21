import React from "react";
import { Alert, Button } from "reactstrap";

import logo from "../../image/LogoNovo.png";
//import "../../style/login.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const onDismiss = () => setVisible(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Sucesso", response);
          window.location = "/";
        } else {
          console.log("nok", response);
          setVisible(true);
        }

        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="div-login">
      <Alert
        color="danger"
        isOpen={visible}
        toggle={onDismiss}
        className="alert-fixed"
      >
        Usuário ou senha inválidos
      </Alert>
      <main className="form-signin w-100 m-auto text-center">
        <form onSubmit={handleFormSubmit}>
          <a href="/">
            <img
              className="mb-4"
              src={logo}
              alt="imagem do logo da escola inova tecnologia"
            />
          </a>
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
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Senha</label>
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
