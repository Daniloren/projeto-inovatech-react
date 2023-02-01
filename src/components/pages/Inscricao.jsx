import React from "react";
//import logo from "../../image/LogoNovo.png";
//import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";
import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";

export default function Inscricao() {
  //Atributos do cadastro do usuário
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
        nome: user.nome,
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

    fetch(process.env.REACT_APP_API_URL + "/users", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        nome,
        email,
        senha,
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
      <AppHeader />
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

      <AppFooter />
    </div>
  );
}
