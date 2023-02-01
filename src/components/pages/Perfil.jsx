import React from "react";
//import logo from "../../image/LogoNovo.png";
//import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";
import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";
import withRouter from "./withRouter";

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem("user"));

    this.state = {
      visibles: false,
      visible: false,
      alertMessage: "",
      userId: user.userId,
      nome: user.nome,
      sobrenome: user.sobrenome,
      endereco: user.endereco,
      numero: user.numero,
      bairro: user.bairro,
      cidade: user.cidade,
      estado: user.estado,
      cep: user.cep,
      email: user.email,
      senha: "",
      repetirSenha: "",
    };
  }

  //export default function Perfil() {
  //Atributos do cadastro do usuário
  // const [nome, setNome] = React.useState("");
  // const [sobrenome, setSobrenome] = React.useState("");
  // const [endereco, setEndereco] = React.useState("");
  // const [numero, setNumero] = React.useState("");
  // const [bairro, setBairro] = React.useState("");
  // const [cidade, setCidade] = React.useState("");
  // const [estado, setEstado] = React.useState("");
  // const [cep, setCep] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [senha, setSenha] = React.useState("");
  // const [repetirSenha, setRepetirSenha] = React.useState("");

  //Atributos utilizados no Alerta
  //const [visible, setVisible] = React.useState(false);

  onDismiss = (type) => {
    if (this.state.typeMessage === "e") this.setState({ visible: false });
    else this.setState({ visibles: false });

    this.setState({ alertMessage: "" });
  };

  //Redireciona o cliente para a Home quando o cadastro dá sucesso
  navigate = () => useNavigate();

  //Adiciona os valores nos campos de endereço depois que busca o CEP
  alimentaForm(dados) {
    this.setState(dados);
    this.setState({
      endereco: dados.logradouro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
    // setEndereco(dados.logradouro);
    // setBairro(dados.bairro);
    // setCidade(dados.localidade);
    // setEstado(dados.uf);
  }

  deleteUser = (e) => {
    e.preventDefault();

    const { userId, email } = this.state;

    fetch(process.env.REACT_APP_API_URL + "/users/" + userId, {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            visibles: true,
            alertMessage: "Usuario deletado com sucesso",
            typeMessage: "s",
          });

          localStorage.removeItem("user");

          setTimeout(() => {
            window.location = "/";
          }, 1500);
          return;
        }
      })
      .catch((e) => {
        console.error(e);

        this.setState({
          visible: true,
          alertMessage:
            "Ops. Não foi possivel deletar o usuário. Tente Novamente mais tarde.",
          typeMessage: "e",
        });
        return;
      });
  };

  //Envia usuario pra API
  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      userId,
      senha,
      repetirSenha,
      nome,
      email,
      sobrenome,
      endereco,
      numero,
      bairro,
      cidade,
      estado,
      cep,
    } = this.state;

    if (senha !== repetirSenha) {
      this.setState({
        visible: true,
        alertMessage: "As senhas não conferem",
        typeMessage: "e",
      });
      return;
    }

    fetch(process.env.REACT_APP_API_URL + "/users", {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userId,
        nome,
        senha,
        email,
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
          //this.usuarioCriado(response.body);
          this.setState({
            visibles: true,
            alertMessage: "Dados atualizados com sucesso!",
            typeMessage: "s",
          });
          return response.json();
        } else {
          //Se der erro mostra alerta de erro
          console.error("Erro", response);
          this.setState({
            visible: true,
            typeMessage: "e",
            alertMessage:
              "Ops. Algo deu errado. Tente novamente em alguns instantes",
          });
        }

        return response;
      })
      .then((r) => {
        localStorage.setItem("user", JSON.stringify(r));
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          visible: true,
          typeMessage: "e",
          alertMessage:
            "Ops. Algo deu errado. Tente novamente em alguns instantes",
        });
      });
  };

  //Busca informações de CEP digitadas no campo cep
  fnBuscaCep(cep) {
    //console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .catch(() => {
        console.error(Error);
        this.setState({
          visible: true,
          typeMessage: "e",
          alertMessage: "Não foi possivel buscar o CEP informado",
        });
      })
      .then((dados) => {
        this.alimentaForm(dados);
      });
  }

  render() {
    return (
      <div>
        <Alert
          fade={true}
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
          className="alert-fixed"
        >
          {this.state.alertMessage}
        </Alert>
        <Alert
          fade={true}
          color="success"
          isOpen={this.state.visibles}
          toggle={this.onDismiss}
          className="alert-fixed"
        >
          {this.state.alertMessage}
        </Alert>
        <AppHeader />
        <form onSubmit={this.handleFormSubmit} className="form">
          <fieldset>
            <div className="campo">
              <label htmlFor="nome">
                <strong>Nome</strong>
              </label>
              <input
                onChange={(e) => this.setState({ nome: e.target.value })}
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={this.state.nome}
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
                onChange={(e) => this.setState({ sobrenome: e.target.value })}
                type="text"
                className="form-control"
                id="sobrenome"
                name="sobrenome"
                value={this.state.sobrenome}
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
                onChange={(e) => this.setState({ endereco: e.target.value })}
                type="text"
                className="form-control"
                id="endereco"
                name="endereco"
                value={this.state.endereco}
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
                onChange={(e) => this.setState({ numero: e.target.value })}
                type="text"
                className="form-control"
                id="numero"
                name="numero"
                value={this.state.numero}
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
                onChange={(e) => this.setState({ bairro: e.target.value })}
                type="text"
                className="form-control"
                id="bairro"
                name="bairro"
                value={this.state.bairro}
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
                onChange={(e) => this.setState({ cidade: e.target.value })}
                type="text"
                className="form-control"
                id="cidade"
                name="cidade"
                value={this.state.cidade}
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
                onChange={(e) => this.setState({ estado: e.target.value })}
                type="text"
                className="form-control"
                id="estado"
                name="estado"
                value={this.state.estado}
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
                onChange={(e) => this.setState({ cep: e.target.value })}
                onBlur={(event) => this.fnBuscaCep(event.target.value)}
                type="text"
                size="12"
                id="cep"
                name="cep"
                value={this.state.cep}
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
                onChange={(e) => this.setState({ email: e.target.value })}
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
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
                onChange={(e) => this.setState({ senha: e.target.value })}
                type="password"
                className="form-control"
                id="senha"
                name="senha"
                value={this.state.senha}
                size="15"
                maxLength="15"
              />
            </div>
            <div className="campo">
              <label htmlFor="repetirSenha">
                <strong>Repetir Senha</strong>
              </label>
              <input
                onChange={(e) =>
                  this.setState({ repetirSenha: e.target.value })
                }
                type="password"
                className="form-control"
                id="repetirSenha"
                name="repetirSenha"
                value={this.state.repetirSenha}
                size="15"
                maxLength="15"
              />
            </div>
          </fieldset>

          <div id="incluirDados">
            <button className="botao">Atualizar</button>
          </div>

          <div id="incluirDados">
            <button className="botao" onClick={this.deleteUser}>
              Excluir Conta
            </button>
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
}

export default withRouter(Perfil);
