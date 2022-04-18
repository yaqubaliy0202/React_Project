import React from "react";
import "./Header.css";
import IMG5 from "../../assets/images/pitsa.png";
import IMG6 from "../../assets/images/komvo.png";
import IMG7 from "../../assets/images/gamburger.png";

// import { Navigation,Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-xs-12 order-xl-1 order-2">
              <h1>Siz izlagan mazzali ta’mlar</h1>
              <p>
                When an unknown printer took a galley of type scrambled it to
                make a type specimen{" "}
              </p>
              <div className="owl-carousel owl-theme top-items"
              >
                <div className="item">
                  <div className="top-card top-card-yellow">
                    <span className="badge">Yangi</span>
                    <h2>
                      PIT <br />
                      <span>-SA</span>
                    </h2>
                    <img src={IMG5} alt="pitsa" />
                  </div>
                </div>
                <div className="item">
                  <div className="top-card top-card-violet">
                    <span className="badge">Ko’p sotilgan</span>
                    <h2>
                      {" "}
                      <span>KOM</span> <br />
                      -BO{" "}
                    </h2>
                    <img src={IMG6} alt="komvo.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xs-12 order-xl-2 order-1">
              <img src={IMG7} alt="gamburger" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );

};



export default Header;
