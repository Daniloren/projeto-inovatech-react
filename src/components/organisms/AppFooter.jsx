import React from 'react'
import logo from '../../image/LogoNovo.png'
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function AppFooter() {
  return (
    <div>
          <div className="container-flex">
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top"
      >
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              className="bi"
              src={logo}
              width="100"
              height="100"
              alt=""
            />
          </Link>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3 mb-2">
          <span style={{ fontSize: 1.5 + "em" }}>
                <FaWhatsapp />
              </span>          </li>
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
  )
}
