import React from "react";
import logo from "../../image/LogoNovo.png";
import Carrousel from "./Carrousel";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Home() {
  return (
    <div>
      <div>ícone</div>
      <header className="p-2 text-bg-dark">
        <div className="container-flex">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="index.html"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                className="bi me-2"
                width="100"
                height="100"
                src={logo}
                alt="Logo Inova Tech esverdeado"
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Cursos
                </a>
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
                <a href="/login">Login</a>
              </button>
              <button type="button" className="btn btn-outline-light">
                <a href="inscricao.html">Matrícula</a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Carrousel />
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="gitHub-img rounded-circle"
              src="https://t2.tudocdn.net/510706?w=140&h=140"
              alt="um gatinho  em preto e branco, logo representado pelo programa GitHub"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>Placeholder</title>

            <h2 className="gitHub">Git Hub</h2>
            <p className="gitHubText">
              Aprenda como instalar
              <br />o git hub no seu computador
            </p>
            <p>
              <a className="saibaMais btn btn-primary" href="#">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="frontBack-img rounded-circle"
              width="140"
              height="140"
              src="https://apexensino.com.br/wp-content/uploads/2017/10/fronback.png"
              alt="uma foto que explica o que é um programador frontend e um programador backend, representados por um operario para o frontend ligado a um 
          notebook e um mergulhador para o backend ligado ao servidor"
            />

            <h2 className="frontBack">Frontend x Backend</h2>
            <p className="frontBackText">
              Aqui você vai encontrar um pouco sobre a diferença entre frontend
              e backend.
            </p>
            <p>
              <a className="saibaMais2 btn btn-primary" href="#">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="carreira-img rounded-circle"
              src="https://static3.depositphotos.com/1006077/199/i/600/depositphotos_1998679-stock-photo-dive-with-a-lot-of.jpg"
              alt="um homem com mascara de mergulho, em um lindo amar com aguas crsitalinas"
            />
            <h2 className="carreira">Mergulhe em sua Carreira</h2>
            <p className="carreiraText">
              Garantimos conhecimento com profundidade e diversidade, para que
              você mergulhe nesse mar de emoções sendo um profissional em TI
            </p>
            <p>
              <a className="saibaMais3 btn btn-primary" href="#">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />
        <AnimationOnScroll
          animateIn="animate__fadeRight"
          delay="300"
          offset="300"
          easing="easeInSine"
        >
          <div className="row featurette">
            <div className="col-md-7">
              <h1 className="featurette-heading">
                Escola de
                <br />
                <span>Inovação & Gestão.</span>
              </h1>
              <p className="lead">
                Prepare-se para aplicar em seu dia a dia técnicas de gestão de
                produtos e projetos, agilidade, liderança, desenvolvimento
                pessoal e muito mais. Conheça os principais conceitos de boas
                práticas de gestão de produtos e projetos e se aprofunde em
                estratégias de metodologias ágeis.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-featurette"
                src="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2019/10/imagemn-escolhida-artigo-e1571255765939-1280x720.jpg"
              />
            </div>
          </div>
        </AnimationOnScroll>

        <hr className="featurette-divider" />

        <div
          className="row featurette"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="col-md-6 order-md-2 align-middle">
            <h2 className="featurette-heading text-center">
              Aprendendo terminal Linux <span className="text-muted"></span>
            </h2>
            <p className="lead text-center">
              Coloque a mão na massa!Aprenda comandos
              <br />
              práticos e úteis para te ajudar a resolver problemas do mundo
              real.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              className="img-featurette"
              src="https://s2.glbimg.com/GUrIhjUQkQesfrDMH0bHS1rsL70=/0x0:620x388/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/8/H/n31ZgkSFC36w2YGXg9yw/glbimg.com-po-tt-f-620x388-2011-12-05-tux-linux-wallpapers-free-desktop-with-the-penguin-wallpaper-1024x768.jpg"
              alt=""
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div
          className="row featurette"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="col-md-7">
            <h2 className="featurette-heading">
              AWS para Iniciantes 2022 - Aprenda e Domine a nuvem Amazon
              <span className="text-muted"></span>
            </h2>
            <p className="lead">
              Turbine sua Carreira Agora ! Entenda de uma vez por todas como a
              Amazon Cloud funciona e seus Principais Serviços.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="img-featurette"
              src="https://www.globalmind.com.br/wp-content/uploads/2021/05/aws-header_tvMEUF2.width-800.png"
              alt="imagem do logo da aws"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
      <div className="container-flex">
        <hr></hr>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="index.html"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img className="bi" src={logo} width="100" height="100" alt="" />
            </a>
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
    </div>
  );
}
