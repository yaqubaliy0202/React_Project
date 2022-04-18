import React from "react";
import "./Footer.css";
import IMG1 from "../../assets/images/chiziq.svg"
import IMG2 from "../../assets/images/google.png"
import IMG3 from "../../assets/images/appstore.png"
import IMG4 from "../../assets/images/phone.png"
import IMG5 from "../../assets/images/logo.png"
import IMG6 from "../../assets/images/you-tube.svg"
import IMG7 from "../../assets/images/facebook.svg"
import IMG8 from "../../assets/images/instag.svg"
import IMG9 from "../../assets/images/telagram.svg"
import IMG10 from "../../assets/images/tik-tok.svg"

const Footer = () => {
  return (
    <>
      <section className="app-section">
        <div className="app-div">
          <img className="pepper-img" src={IMG1} alt="chiziq" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h1>
                  Mobil ilovamiz <br />
                  orqali buyurtma <br />
                  berish yanada osonroq
                </h1>
                <a className="app-btn app-btn-first" href="#">
                  <img src={IMG2} alt="google" />
                </a>
                <a className="app-btn" href="#">
                  <img src={IMG3} alt="appstore" />
                </a>
              </div>
              <div className="col-xl-6">
                <img className="phone" src={IMG4} alt="phone" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="flexsedLine">
                <div className="footerLogo order-1">
                  {" "}
                  <img src={IMG5} alt="logo" />
                </div>
                <ul className="paddingLeft">
                  <li>Asosiy</li>
                  <li>
                    <a href="#">Kompaniya haqida</a>
                  </li>
                  <li>
                    <a href="#">Filiallar</a>
                  </li>
                  <li>
                    <a href="#">Bolalar uchun</a>
                  </li>
                </ul>
                <ul>
                  <li>Qo’shimcha</li>
                  <li>
                    <a href="#">Menyu</a>
                  </li>
                  <li>
                    <a href="#">Bonusli karta</a>
                  </li>
                  <li>
                    <a href="#">Bu qanday ishlaydi?</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="contact">
                <h3>Biz bilan aloqa</h3>
                <h2>(+998 71) 200-54-00</h2>
                <p>
                  100011, Toshkent sh. Shayxontohur tumani, Zarqaynar ko’chasi,
                  3B-uy
                </p>
              </div>
            </div>
          </div>
          <div className="oneLineSocial">
            <h5>© Maxway, 2020</h5>
            <div className="socials">
              <a href="#">
                <span>
                  <img src={IMG6} alt="youtube" />
                </span>
              </a>
              <a href="#">
                <span>
                  <img src={IMG7} alt="facebook" />
                </span>
              </a>
              <a href="#">
                <span>
                  <img src={IMG8} alt="instag" />
                </span>
              </a>
              <a href="#">
                <span>
                  <img src={IMG9} alt="telegram" />
                </span>
              </a>
              <a href="#">
                <span>
                  <img src={IMG10} alt="tik-tok" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
