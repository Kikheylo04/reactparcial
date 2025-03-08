import "../../assets/css/supermarketBestselling.css";

export default function BestsellingSupermarket() {
  return (
    <>
    <div style={{ width: "100%", textAlign: "center", marginTop: "40px", position: "relative" }}>
    <div style={{fontWeight:"700", fontSize:"30px", marginTop:"40px", textAlign:"left", marginBottom:"20px"}}>Lo más vendidos supermercado</div>
      <input type="radio" name="supermarket1" id="supermarket-slide1" defaultChecked hidden />
      <input type="radio" name="supermarket1" id="supermarket-slide2" hidden />

      <div style={{ maxWidth: "100%", overflow: "hidden", position: "relative"}}>
        <div className="carousel-container">
          <div className="slide">
            <ul className="category-list">
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/29694318-162-162/135484.jpg?v=638648726450730000" alt="" />
                  <p style={{ fontWeight: "400" }}>PLAZA VEA</p>
                  <p>Pollo Entero Fresco con Menudencia</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 2.2kg aprox.</p>
                  <p style={{ color:"red" }}>S/8.20 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/27363529-162-162/20193762.jpg?v=638276836145700000" alt="" />
                  <p style={{ fontWeight: "400" }}>SAN FERNANDO</p>
                  <p>Filete de Pechuga de Pollo Congelado San Ferna..</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 1.2kg aprox.</p>
                  <p style={{ color:"red" }}>S/18.50 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/30584927-162-162/20168645.jpg?v=638750554626370000" alt="" />
                  <p style={{ fontWeight: "400" }}>EL BUEN CORTE</p>
                  <p>Carne Molida EL BUEN CORTE x kg</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 0.8kg aprox.</p>
                  <p style={{ color:"red" }}>S/20.90 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/20372458-162-162/20145201.jpg?v=638023231265300000" alt="" />
                  <p style={{ fontWeight: "400" }}>SADIA</p>
                  <p>Filete de Pechuga Importado SADIA Bolsa...</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Bolsa 1KG</p>
                  <p style={{ color:"red" }}>S/16.90 un</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/29450552-162-162/772631.jpg?v=638616384640530000" alt="" />
                  <p style={{ fontWeight: "400" }}>PLAZA VEA</p>
                  <p>Plátano de Seda</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 1 kg aprox</p>
                  <br />
                  <p style={{ color:"red" }}>S/2.99 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/214684-162-162/65702.jpg?v=636905883114370000" alt="" />
                  <p style={{ fontWeight: "400" }}>PLAZA VEA</p>
                  <p>Sandia</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 2.5kg aprox</p>
                  <p style={{ color:"red" }}>S1.19 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/20372457-162-162/64576.jpg?v=638023231236300000" alt="" />
                  <p style={{ fontWeight: "400" }}>PLAZA VEA</p>
                  <p>Palta Fuerte</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 0.6kg aprox</p>
                  <p style={{ color:"red" }}>S/8.88 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/518589-162-162/844123.jpg?v=637417681771730000" alt="" />
                  <p style={{ fontWeight: "400" }}>PLAZA VEA</p>
                  <p>Cebolla Roja P x kg</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Presentación 20.5kg aprox</p>
                  <p style={{ color:"red" }}>S/1.78 x kg</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/30426066-162-162/20314552.jpg?v=638761210743600000" alt="" />
                  <p style={{ fontWeight: "400" }}>ALACENA</p>
                  <p>Mayonesa ALACENA Doypack 850g</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Doypack 850g</p>
                  <p style={{ color:"red" }}>S/8.20 un</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/30632032-162-162/20281564.jpg?v=638758944715230000" alt="" />
                  <p style={{ fontWeight: "400" }}>PRIMOR</p>
                  <p>Aceite Vegetal Premium PRIMOR Botella 900ml</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Botella 900ml</p>
                  <p style={{ color:"red" }}>S/9.50 un</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/30708239-162-162/20277768.jpg?v=638764129142900000" alt="" />
                  <p style={{ fontWeight: "400" }}>DON VITTORIO</p>
                  <p>Spaghetti DON VITTORIO Paquete 950g</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Bolsa 950g</p>
                  <p style={{ color:"red" }}>S/5.60 un</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/ids/414996-162-162/20198553.jpg?v=637370979653270000" alt="" />
                  <p style={{ fontWeight: "400" }}>BELL'S</p>
                  <p>Azúcar Rubia BELL'S Bolsa 5kg</p>
                  <p style={{ fontWeight: "400" }}>Por Plaza Vea</p>
                  <p style={{ fontWeight: "400" }}>Bolsa 5kg</p>
                  <p style={{ color:"red" }}>S/20.80 un</p>
                  <button>
                    AGREGAR
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <label htmlFor="supermarket-slide1" className="carousel-btn prev">❮</label>
        <label htmlFor="supermarket-slide2" className="carousel-btn next">❯</label>
      </div>
    </div>
    </>
  )
}
