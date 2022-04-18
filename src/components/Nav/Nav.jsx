import React from "react";
import IMG from "../../assets/images/menu.svg"
import IMG2 from "../../assets/images/logo.png"
import IMG3 from "../../assets/images/Shape.svg"
import IMG4 from "../../assets/images/Group.svg"
import "./Nav.css";
const Nav = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={IMG2} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon">
            <img src={IMG} alt="menu" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav align-items-center ms-auto  mb-0 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Menyu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bolalar uchun
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Filiallar
              </a>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-center">
                <a href="tel:+998712005400">
                  <span>
                    <img
                      className="icon icon-Shape"
                      src={IMG3}
                      alt="group"
                    />
                  </span>
                </a>
                <a href="tel:+998712005400">
                  <h6>(+99871)</h6>
                  <h3>200-54-00</h3>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <div
                  className="d-flex align-items-center"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="position-relative">
                    <span>
                      <img
                        className="icon icon-Group"
                        src={IMG4}
                        alt="group"
                      />
                    </span>
                    <span className="badge">3</span>
                  </div>
                  <div>
                    <h3>Korzina</h3>
                    <h6>125,400UZS</h6>
                  </div>
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Humburger
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Xot-Dog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lavash
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>

  );
};

export default Nav;
