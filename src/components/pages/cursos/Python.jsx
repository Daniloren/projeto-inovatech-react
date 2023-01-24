import React from "react";
import AppFooter from "../../organisms/AppFooter";
import AppHeader from "../../organisms/AppHeader";

import { FaClock, FaBook, FaPlayCircle, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
{
  /* eslint jsx-a11y/anchor-is-valid : 0 */
}

export default function Python() {
  return (
    <div>
      <AppHeader />

      <main>
        <h1>Python</h1>
        <section>
          <div className="container px-4 py-6" id="icon-grid">
            <h4 className="pb-2 border-bottom">Avançado na linguagem</h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="col d-flex align-items-start item">
                <span className=" bi flex-shrink-0 me-3 item">
                  <FaClock />
                </span>
                <div>
                  <h5 className="fw-bold mb-0">86h</h5>
                  <p>p/ conclusão</p>
                </div>
              </div>

              <div className="col d-flex align-items-start item">
                <span className="bi flex-shrink-0 me-3 item">
                  <FaBook />
                </span>
                <div>
                  <h5 className="fw-bold mb-0">120</h5>
                  <p>Atividades</p>
                </div>
              </div>

              <div className="col d-flex align-items-start item">
                <span className="bi flex-shrink-0 me-3 item">
                  <FaPlayCircle />
                </span>
                <div>
                  <h5 className="fw-bold mb-0">200</h5>
                  <p>Minutos de aula gravada</p>
                </div>
              </div>

              <div className="col d-flex align-items-start item">
                <span className="bi flex-shrink-0 me-3 item">
                  <FaVideo />
                </span>
                <div>
                  <h5 className="fw-bold mb-0">150h</h5>
                  <p>Aulas ao vivo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-sm px-4 py-5 ratio ratio-21x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-LATVnPcvHI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="container px-4 py-5" id="icon-grid">
            <h2 className="pb-2 border-bottom">Conteúdo Detalhado</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="col d-flex align-items-start">
                <div>
                  <h5 className="fw-bold mb-0">1. Instalação do Python</h5>
                  <ul className="list-unstyled">
                    <li>Instalando o Python no Windows</li>
                    <li>Instalando em outras plataformas</li>
                    <li>Função print e variáveis</li>
                    <li>Tipagem do Python</li>
                  </ul>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div>
                  <h5 className="fw-bold mb-0">
                    2. Lidando com a entrada do usuário
                  </h5>
                  <ul className="list-unstyled">
                    <li>Instalando e conhecendo o PyCharm</li>
                    <li>Comparando variáveis</li>
                    <li>Diferenças entre o Python 2 e o Python 3</li>
                    <li>Para saber mais: JavaScript vs Python</li>
                  </ul>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div>
                  <h5 className="fw-bold mb-0">3. Testando valores</h5>
                  <ul className="list-unstyled">
                    <li>A condição elif</li>
                    <li>Para saber mais: if sem ou com parênteses?</li>
                    <li>Mão na massa: Usando while</li>
                  </ul>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div>
                  <h5 className="fw-bold mb-0">4. A sequência do jogo</h5>
                  <ul className="list-unstyled">
                    <li>O laço com while</li>
                    <li>Formatação de strings</li>
                  </ul>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div>
                  <h5 className="fw-bold mb-0">
                    5. Conhecendo e trabalhando com listas
                  </h5>
                  <ul className="list-unstyled">
                    <li>Criando uma lista</li>
                    <li>Adicionando elementos em uma lista</li>
                    <li>
                      Outros recursos com a lista: as funções count() e index()
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div>
                  <h5 className="fw-bold mb-0">
                    6. Conhecendo e trabalhando com tuplas
                  </h5>
                  <ul className="list-unstyled">
                    <li>O que são tuplas</li>
                    <li>Criando uma tupla</li>
                    <li>Tuplas dentro de listas</li>
                    <li>Listas dentro de tuplas</li>
                    <li>Convertendo listas em tuplas</li>
                    <li>Convertendo tuplas em listas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-dark text-secondary px-4 py-5 text-center">
          <div className="py-5 text-center">
            <h1 className="display-2fw-bold text-white">
              Ainda não estuda com a gente?
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5">Invista na transformação da sua carreira!</p>
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
