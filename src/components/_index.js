{
	data.map(({id,img1,img2,img3,img4,title,price,about})=> {
		return (
			<div className="tab-content" id="pills-tabContent">
	<div
		className="tab-pane fade show active"
		id="pills-all"
		role="tabpanel"
		aria-labelledby="pills-all-tab"
	>
		<div className="tab-box">
			<h1>Pitsa</h1>
			<div className="row">
				<div className="col-xl-6 col-sm-12">
					<div className="card">
						<div className="card-body">
							<div className="d-flex">
								<div className="card-left">
									<img src="images/pitsa1.svg" alt="pitsa" />
									<span className="badge">
										<img src="images/olov.svg" alt="olov" />
									</span>
								</div>
								<div className="card-right">
									<h3>
										Gavaya
										<img src="images/chees.svg" alt="chees" />
									</h3>
									<p>
										Горячая закуска с митболами из говядины, томатами,
										моцареллой и соусом чипотле
									</p>
									<div className="d-flex justify-content-between align-items-center">
										<h2>45,000 UZS</h2>
										<button className="btn-yellow">
											<span>
												<img src="images/plas.svg" alt="plas" />
											</span>
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
		)
	})
}

      {/* <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/pitsa2.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Mexica
                            <img src="images/achchiq.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>53,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa3.svg" alt="pitsa" />
                        </div>
                        <div className="card-right">
                          <h3>
                            Hot achchiko
                            <img src="images/barg.svg" alt="barg" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>64,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa45.svg" alt="pitsa" />
                        </div>
                        <div className="card-right">
                          <h3>Mexica</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>45,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa3.svg" alt="pitsa" />
                        </div>
                        <div className="card-right">
                          <h3>
                            Apocalipo
                            <img src="images/achchiq.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>64,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa1.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Sosiskacho
                            <img src="images/barg.svg" alt="barg" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>45,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa1.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>Mexica</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>53,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="see-more">Ko‘proq ko‘rish</button>
              <h1>Burger</h1>
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/hamburger.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Cheeseburger
                            <img src="images/chees.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/hamburger.svg" alt="hamburger" />
                        </div>
                        <div className="card-right">
                          <h3>
                            Chili burger
                            <img src="images/achchiq.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/hamburger.svg" alt="hamburger" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Hamburger
                            <img src="images/barg.svg" alt="barg" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/hamburger.svg" alt="humburger" />
                        </div>
                        <div className="card-right">
                          <h3>Double Burger</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="see-more">Ko‘proq ko‘rish</button>
              <h1>Kombo</h1>
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/kombo1.svg" alt="kombo1    " />
                        </div>
                        <div className="card-right">
                          <h3>Kombo-1</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>25,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/kombo2.svg" alt="kombo2" />
                        </div>
                        <div className="card-right">
                          <h3>Kombo-2</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/kombo1.svg" alt="kombo1" />
                        </div>
                        <div className="card-right">
                          <h3>Kombo-3</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>30,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/sprite.svg" alt="sprite" />
                        </div>
                        <div className="card-right">
                          <h3>Sprite 1L</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>6,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/cola.svg" alt="cola" />
                        </div>
                        <div className="card-right">
                          <h3>Coca cola 1,5L</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>9,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/fanta.svg" alt="fanta" />
                        </div>
                        <div className="card-right">
                          <h3>Fanta 1L</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>6,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
          <div
            className="tab-pane fade"
            id="pills-pizza"
            role="tabpanel"
            aria-labelledby="pills-pizza-tab"
          >
            <div className="tab-box">
              <h1>Pitsa</h1>
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/pitsa1.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Gavaya
                            <img src="images/chees.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>45,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa2.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Mexica
                            <img src="images/achchiq.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>53,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa3.svg" alt="pitsa" />
                        </div>
                        <div className="card-right">
                          <h3>
                            Hot achchiko
                            <img src="images/barg.svg" alt="barg" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>64,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa45.svg" alt="pitsa" />
                        </div>
                        <div className="card-right">
                          <h3>Mexica</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>45,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa3.svg" alt="pitsa" />
                        </div>
                        <div className="card-right">
                          <h3>
                            Apocalipo
                            <img src="images/achchiq.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>64,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa1.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Sosiskacho
                            <img src="images/barg.svg" alt="barg" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>45,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/pitsa1.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>Mexica</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>53,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
          <div
            className="tab-pane fade"
            id="pills-burger"
            role="tabpanel"
            aria-labelledby="pills-burger-tab"
          >
            <div className="tab-box">
              <h1>Burger</h1>
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/hamburger.svg" alt="pitsa" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Cheeseburger
                            <img src="images/chees.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/hamburger.svg" alt="hamburger" />
                        </div>
                        <div className="card-right">
                          <h3>
                            Chili burger
                            <img src="images/achchiq.svg" alt="chees" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/hamburger.svg" alt="hamburger" />
                          <span className="badge">
                            <img src="images/olov.svg" alt="olov" />
                          </span>
                        </div>
                        <div className="card-right">
                          <h3>
                            Hamburger
                            <img src="images/barg.svg" alt="barg" />
                          </h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/hamburger.svg" alt="humburger" />
                        </div>
                        <div className="card-right">
                          <h3>Double Burger</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
          <div
            className="tab-pane fade"
            id="pills-kombo"
            role="tabpanel"
            aria-labelledby="pills-kombo-tab"
          >
            <div className="tab-box">
              <h1>Kombo</h1>
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/kombo1.svg" alt="kombo1    " />
                        </div>
                        <div className="card-right">
                          <h3>Kombo-1</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>25,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/kombo2.svg" alt="kombo2" />
                        </div>
                        <div className="card-right">
                          <h3>Kombo-2</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>23,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/kombo1.svg" alt="kombo1" />
                        </div>
                        <div className="card-right">
                          <h3>Kombo-3</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>30,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
          <div
            className="tab-pane fade"
            id="pills-salat"
            role="tabpanel"
            aria-labelledby="pills-salat-tab"
          >
            <h1>Uzr qomadi!</h1>
          </div>
          <div
            className="tab-pane fade"
            id="pills-sweets"
            role="tabpanel"
            aria-labelledby="pills-sweets-tab"
          >
            <h1>Uzr qomadi!</h1>
          </div>
          <div
            className="tab-pane fade"
            id="pills-drinks"
            role="tabpanel"
            aria-labelledby="pills-drinks-tab"
          >
            <div className="tab-box">
              <h1>Ichimliklar</h1>
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="card-left">
                          <img src="images/sprite.svg" alt="sprite" />
                        </div>
                        <div className="card-right">
                          <h3>Sprite 1L</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>6,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/cola.svg" alt="cola" />
                        </div>
                        <div className="card-right">
                          <h3>Coca cola 1,5L</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>9,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
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
                          <img src="images/fanta.svg" alt="fanta" />
                        </div>
                        <div className="card-right">
                          <h3>Fanta 1L</h3>
                          <p>
                            Горячая закуска с митболами из говядины, томатами,
                            моцареллой и соусом чипотле
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>6,000 UZS</h2>
                            <button className="btn-yellow">
                              <span>
                                <img src="images/plas.svg" alt="plas" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}