import React from 'react'
import "./AboutUs.css"
import IMG1 from "../../assets/images/pitsa1.svg"
import IMG3 from "../../assets/images/fanta.svg"
import IMG4 from "../../assets/images/plas.svg"
import IMG5 from "../../assets/images/barg.svg"
import IMG6 from "../../assets/images/achchiq.svg"
import IMG8 from "../../assets/images/olov.svg"
import IMG9 from "../../assets/images/chees.svg"
import IMG10 from "../../assets/images/hamburger.svg"
import IMG11 from "../../assets/images/pitsa45.svg"
import IMG13 from "../../assets/images/pitsa2.svg"
import IMG14 from "../../assets/images/pitsa3.svg"
import IMG15 from "../../assets/images/kombo1.svg"
import IMG16 from "../../assets/images/kombo2.svg"
import IMG17 from "../../assets/images/sprite.svg"
import IMG18 from "../../assets/images/cola.svg"

const AboutUs = () => {
  return (
   
    <section className="category-section">
        <div className="container">
          <div className="one-line">
            <div className="left">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">Barchasi</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-pizza" type="button" role="tab" aria-controls="pills-pizza" aria-selected="false">Pitsa</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-burger" aria-selected="false">Burger</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-kombo-tab" data-bs-toggle="pill" data-bs-target="#pills-kombo" type="button" role="tab" aria-controls="pills-kombo" aria-selected="false">Kombo</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-salat-tab" data-bs-toggle="pill" data-bs-target="#pills-salat" type="button" role="tab" aria-controls="pills-salat" aria-selected="false">Salat</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-sweets-tab" data-bs-toggle="pill" data-bs-target="#pills-sweets" type="button" role="tab" aria-controls="pills-sweets" aria-selected="false">Shirinliklar</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-drinks-tab" data-bs-toggle="pill" data-bs-target="#pills-drinks" type="button" role="tab" aria-controls="pills-drinks" aria-selected="false">Ichimliklar</button>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Filtr
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
              <div className="tab-box">
                <h1>Pitsa</h1>
                <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG1} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Gavaya
                              <img src={IMG9} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>45,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG13} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Mexica
                              <img src={IMG6} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>53,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG14} alt="pitsa" />
                          </div>
                          <div className="card-right">
                            <h3>Hot achchiko
                              <img src={IMG5} alt="barg" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>64,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG11} alt="pitsa" />
                          </div>
                          <div className="card-right">
                            <h3>Mexica</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>45,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG14} alt="pitsa" />
                          </div>
                          <div className="card-right">
                            <h3>Apocalipo
                              <img src={IMG9} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>64,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4}alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG1} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Sosiskacho
                              <img src={IMG5} alt="barg" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>45,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG1} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Mexica</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>53,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="see-more">
                  Ko‘proq ko‘rish
                </button>
                <h1>Burger</h1>
                <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="pitsa"   />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Cheeseburger
                              <img src={IMG9} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="hamburger" />
                          </div>
                          <div className="card-right">
                            <h3>Chili burger
                              <img src={IMG6} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="hamburger" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Hamburger
                              <img src={IMG5} alt="barg" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="humburger" />
                          </div>
                          <div className="card-right">
                            <h3>Double Burger</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="see-more">
                  Ko‘proq ko‘rish
                </button>
                <h1>Kombo</h1>
                <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG15} alt="kombo1    " />
                          </div>
                          <div className="card-right">
                            <h3>Kombo-1</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>25,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG16}alt="kombo2" />
                          </div>
                          <div className="card-right">
                            <h3>Kombo-2</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG15} alt="kombo1" />
                          </div>
                          <div className="card-right">
                            <h3>Kombo-3</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>30,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG10} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1>Ichimliklar</h1>
                <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG17} alt="sprite" />
                          </div>
                          <div className="card-right">
                            <h3>Sprite 1L</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>6,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG18} alt="cola" />
                          </div>
                          <div className="card-right">
                            <h3>Coca cola 1,5L</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>9,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG3}alt="fanta" />
                          </div>
                          <div className="card-right">
                            <h3>Fanta 1L</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>6,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-pizza" role="tabpanel" aria-labelledby="pills-pizza-tab">
              <div className="tab-box">
                <h1>Pitsa</h1>
                <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG1} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Gavaya
                              <img src={IMG9} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>45,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG13} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Mexica
                              <img src={IMG6} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>53,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG14} alt="pitsa" />
                          </div>
                          <div className="card-right">
                            <h3>Hot achchiko
                              <img src={IMG5} alt="barg" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>64,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG11} alt="pitsa" />
                          </div>
                          <div className="card-right">
                            <h3>Mexica</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>45,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG14} alt="pitsa" />
                          </div>
                          <div className="card-right">
                            <h3>Apocalipo
                              <img src={IMG9} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>64,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4}alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG1} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Sosiskacho
                              <img src={IMG5} alt="barg" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>45,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG1} alt="pitsa" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Mexica</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>53,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab">
              <div className="tab-box">
                <h1>Burger</h1>
                <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="pitsa"   />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Cheeseburger
                              <img src={IMG9} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="hamburger" />
                          </div>
                          <div className="card-right">
                            <h3>Chili burger
                              <img src={IMG6} alt="chees" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="hamburger" />
                            <span className="badge">
                              <img src={IMG8} alt="olov" />
                            </span>
                          </div>
                          <div className="card-right">
                            <h3>Hamburger
                              <img src={IMG5} alt="barg" />
                            </h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG10} alt="humburger" />
                          </div>
                          <div className="card-right">
                            <h3>Double Burger</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-kombo" role="tabpanel" aria-labelledby="pills-kombo-tab">
              <div className="tab-box">
                <h1>Kombo</h1>
                  <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG15} alt="kombo1    " />
                          </div>
                          <div className="card-right">
                            <h3>Kombo-1</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>25,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG16}alt="kombo2" />
                          </div>
                          <div className="card-right">
                            <h3>Kombo-2</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>23,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG15} alt="kombo1" />
                          </div>
                          <div className="card-right">
                            <h3>Kombo-3</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>30,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG10} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-salat" role="tabpanel" aria-labelledby="pills-salat-tab"><h1>Uzr qomadi!</h1></div>
            <div className="tab-pane fade" id="pills-sweets" role="tabpanel" aria-labelledby="pills-sweets-tab"><h1>Uzr qomadi!</h1></div>
            <div className="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
              <div className="tab-box">
                <h1>Ichimliklar</h1>
                 <div className="row">
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG17} alt="sprite" />
                          </div>
                          <div className="card-right">
                            <h3>Sprite 1L</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>6,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG18} alt="cola" />
                          </div>
                          <div className="card-right">
                            <h3>Coca cola 1,5L</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>9,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="card-left">
                            <img src={IMG3}alt="fanta" />
                          </div>
                          <div className="card-right">
                            <h3>Fanta 1L</h3>
                            <p>Горячая закуска с митболами
                              из говядины, томатами,
                              моцареллой и соусом чипотле
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <h2>6,000 UZS</h2>
                              <button className="btn-yellow">
                                <span><img src={IMG4} alt="plas" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs