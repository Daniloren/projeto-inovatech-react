import React, { Component } from "react";
import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";

import { FaClock, FaBook, FaPlayCircle, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";
{
  /* eslint jsx-a11y/anchor-is-valid : 0 */
}

class Curso extends Component {
  state = {
    externalData: null,
    curso: {
      cursoId: null,
    },
  };

  handleCursoChange = (cursoId) => {
    this.setState = {
      curso: {
        cursoId: cursoId,
      },
    };
  };

  componentDidMount() {
    const idAtual = this.props.params.cursosId;

    this._asyncRequest = fetch("/cursos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const cursos = response.cursos.Items;
        const curso = cursos.filter((c) => {
          if (c.cursosId.toLowerCase() === idAtual.toLowerCase()) return c;
        });

        if (curso.length == 1) this.setState({ curso: curso[0] });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { curso } = this.state;

    let linhas = [];
    if (
      curso &&
      curso.conteudoDetalhado &&
      curso.conteudoDetalhado.length >= 1
    ) {
      for (let o = 0; o < curso.conteudoDetalhado.length; o++) {
        const detalhe = curso.conteudoDetalhado[o];

        linhas.push(
          <div className="col d-flex align-items-start">
            <div>
              <h5 className="fw-bold mb-0">{detalhe.titulo}</h5>
              <ul className="list-unstyled">
                <li>{detalhe.texto}</li>
              </ul>
            </div>
          </div>
        );
      }
    }

    if (!curso.cursosId) {
      return (
        <div>
          <AppHeader />
          <main>
            <h1>Nenhum curso encontrado</h1>
          </main>
          <AppFooter />
        </div>
      );
    } else {
      return (
        <div>
          <AppHeader />

          <main>
            <h1>{curso.cursosId}</h1>
            <section>
              <div className="container px-4 py-6" id="icon-grid">
                <h4 className="pb-2 border-bottom">{curso.titulo}</h4>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                  <div className="col d-flex align-items-start item">
                    <span className=" bi flex-shrink-0 me-3 item">
                      <FaClock />
                    </span>
                    <div>
                      <h5 className="fw-bold mb-0">
                        {curso.horasParaConclusao}
                      </h5>
                      <p>p/ conclusão</p>
                    </div>
                  </div>

                  <div className="col d-flex align-items-start item">
                    <span className="bi flex-shrink-0 me-3 item">
                      <FaBook />
                    </span>
                    <div>
                      <h5 className="fw-bold mb-0">
                        {curso.quantidadeAtividades}
                      </h5>
                      <p>Atividades</p>
                    </div>
                  </div>

                  <div className="col d-flex align-items-start item">
                    <span className="bi flex-shrink-0 me-3 item">
                      <FaPlayCircle />
                    </span>
                    <div>
                      <h5 className="fw-bold mb-0">
                        {curso.minutosAulasGravadas}
                      </h5>
                      <p>Minutos de aula gravada</p>
                    </div>
                  </div>

                  <div className="col d-flex align-items-start item">
                    <span className="bi flex-shrink-0 me-3 item">
                      <FaVideo />
                    </span>
                    <div>
                      <h5 className="fw-bold mb-0">{curso.horasAulasAoVivo}</h5>
                      <p>Aulas ao vivo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-sm px-4 py-5 ratio ratio-21x9">
                <iframe
                  width="560"
                  height="315"
                  src={curso.linkVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="container px-4 py-5" id="icon-grid">
                <h2 className="pb-2 border-bottom">Conteúdo Detalhado</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                  {linhas}
                </div>
              </div>
            </section>

            <div className="bg-dark text-secondary px-4 py-5 text-center">
              <div className="py-5 text-center">
                <h1 className="display-2fw-bold text-white">
                  Ainda não estuda com a gente?
                </h1>
                <div className="col-lg-6 mx-auto">
                  <p className="fs-5">
                    Invista na transformação da sua carreira!
                  </p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    >
                      <Link to="/inscricao">Comece agora</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AppFooter />
        </div>
      );
    }
  }
}

export default withRouter(Curso);
