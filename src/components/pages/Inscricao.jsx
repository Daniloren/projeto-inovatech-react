import React from "react";
import logo from "../../image/LogoNovo.png";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";

export default function Inscricao() {
  //Atributos do cadastro do usuario
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [repetirSenha, setRepetirSenha] = React.useState("");

  //Atributos utilizados no Alerta
  const [visible, setVisible] = React.useState(false);
  const onDismiss = () => setVisible(false);

  //Redireciona o cliente para a Home quando o cadastro dá sucesso
  const navigate = useNavigate();

  //Redireciona o usuario para a Home
  const usuarioCriado = (user) => {
    navigate("/", {
      state: {
        id: user.id,
        img: "",
        name: user.name,
        email: user.email,
      },
    });
  };

  //Adiciona os valores nos campos de endereço depois que busca o CEP
  const alimentaForm = (dados) => {
    setEndereco(dados.logradouro);
    setBairro(dados.bairro);
    setCidade(dados.localidade);
    setEstado(dados.uf);
  };

  //Envia usuario pra API
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: nome,
        email,
        password: senha,
        sobrenome,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
        cep,
      }),
    })
      .then((response) => {
        //Usuario criado com sucesso
        if (response.ok) {
          console.log("Sucesso", response);
          usuarioCriado(response.body);
        } else {
          //Se der erro mostra alerta de erro
          console.log("Erro", response);
          setVisible(true);
        }

        return response;
      })
      .catch((err) => {
        console.log(err);
        setVisible(true);
      });
  };

  //Busca informações de CEP digitadas no campo cep
  const fnBuscaCep = (cep) => {
    //console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .catch(() => {
        console.log(Error);
        setVisible(true);
      })
      .then((dados) => {
        console.log(dados);
        alimentaForm(dados);
      });
  };

  return (
    <div>
      <Alert
        fade={true}
        color="danger"
        isOpen={visible}
        toggle={onDismiss}
        className="alert-fixed"
      >
        Ops. Algo deu errado. Tente novamente em alguns instantes
      </Alert>
      <header className="p-2 text-bg-dark">
        <div className="container-flex">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/home"
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
                <Link to="#" className="nav-link px-2 text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Cursos
                </Link>
              </li>

              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Sobre
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
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
          </div>
        </div>
      </header>
      <form onSubmit={handleFormSubmit} className="form">
        <fieldset>
          <div className="campo">
            <label htmlFor="nome">
              <strong>Nome</strong>
            </label>
            <input
              onChange={(event) => setNome(event.target.value)}
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={nome}
              aria-describedby="nome"
              size="20"
              maxLength="20"
            />
          </div>
          <div className="campo">
            <label htmlFor="sobrenome">
              <strong>Sobrenome</strong>
            </label>
            <input
              onChange={(event) => setSobrenome(event.target.value)}
              type="text"
              className="form-control"
              id="sobrenome"
              name="sobrenome"
              value={sobrenome}
              aria-describedby="sobrenome"
              size="25"
              maxLength="25"
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="campo">
            <label htmlFor="endereco">
              <strong>Endereço</strong>
            </label>
            <input
              onChange={(event) => setEndereco(event.target.value)}
              type="text"
              className="form-control"
              id="endereco"
              name="endereco"
              value={endereco}
              aria-describedby="endereco"
              size="60"
              maxLength="60"
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="campo">
            <label htmlFor="numero">
              <strong>Nº</strong>
            </label>
            <input
              onChange={(event) => setNumero(event.target.value)}
              type="text"
              className="form-control"
              id="numero"
              name="numero"
              value={numero}
              aria-describedby="numero"
              size="6"
              maxLength="6"
            />
          </div>

          <div className="campo">
            <label htmlFor="bairro">
              <strong>Bairro</strong>
            </label>
            <input
              onChange={(event) => setBairro(event.target.value)}
              type="text"
              className="form-control"
              id="bairro"
              name="bairro"
              value={bairro}
              aria-describedby="bairro"
              size="20"
              maxLength="20"
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="campo">
            <label htmlFor="cidade">
              <strong>Cidade</strong>
            </label>
            <input
              onChange={(event) => setCidade(event.target.value)}
              type="text"
              className="form-control"
              id="cidade"
              name="cidade"
              value={cidade}
              aria-describedby="cidade"
              size="20"
              maxLength="20"
            />
          </div>

          <div className="campo">
            <label htmlFor="estado">
              <strong>Estado</strong>
            </label>
            <input
              onChange={(event) => setEstado(event.target.value)}
              type="text"
              className="form-control"
              id="estado"
              name="estado"
              value={estado}
              aria-describedby="estado"
              size="20"
              maxLength="20"
            />
          </div>

          <div className="campo">
            <label htmlFor="cep">
              <strong>CEP</strong>
            </label>
            <input
              onChange={(event) => setCep(event.target.value)}
              onBlur={(event) => fnBuscaCep(event.target.value)}
              type="text"
              size="12"
              id="cep"
              name="cep"
              value={cep}
              className="form-control"
              maxLength="12"
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="campo">
            <label htmlFor="email">
              <strong>E-mail</strong>
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              size="60"
              maxLength="60"
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="campo">
            <label htmlFor="senha">
              <strong>Senha</strong>
            </label>
            <input
              onChange={(event) => setSenha(event.target.value)}
              type="password"
              className="form-control"
              id="senha"
              name="senha"
              value={senha}
              size="15"
              maxLength="15"
            />
          </div>
          <div className="campo">
            <label htmlFor="repetirSenha">
              <strong>Repetir Senha</strong>
            </label>
            <input
              onChange={(event) => setRepetirSenha(event.target.value)}
              type="password"
              className="form-control"
              id="repetirSenha"
              name="repetirSenha"
              value={repetirSenha}
              size="15"
              maxLength="15"
            />
          </div>
        </fieldset>

        <div className="checkbox">
          <input type="checkbox" value="check1" />
          <p>
            Quero receber ofertas especiais, recomendações personalizadas e
            dicas de aprendizado.
          </p>
          <p>
            Ao se inscrever, você concorda com nossos termos de Uso e com a
            Política de Privacidade.
          </p>
        </div>

        <div id="incluirDados">
          <button className="botao">Cadastrar</button>
        </div>
        <br />
        <br />
        <br />
      </form>
      <br />

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/home"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img className="bi" src={logo} width="100" height="100" alt="" />
          </Link>
          <span className="mb-3 mb-md-0 text-muted">
            &copy; 2022 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3 mb-2">
            <span style={{ fontSize: 1.5 + "em" }}>
              <FaWhatsapp />
            </span>
          </li>
          <li className="ms-3">
            <span style={{ fontSize: 1.5 + "em" }}>
              <FaFacebookF />
            </span>
          </li>
          <li className="ms-3">
            <span style={{ fontSize: 1.5 + "em" }}>
              <FaInstagram />
            </span>
          </li>
        </ul>
      </footer>
    </div>
  );
}
