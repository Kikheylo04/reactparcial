import "../../assets/css/carouselCategory.css";

export default function CategoryCarousel() {
  return (
    <>
    <div style={{ width: "100%", textAlign: "center", marginTop: "40px", position: "relative" }}>
      <input type="radio" name="carousel" id="slide1" defaultChecked hidden />
      <input type="radio" name="carousel" id="slide2" hidden />

      <div style={{ maxWidth: "100%", overflow: "hidden", position: "relative"}}>
        <div className="carousel-container">
          <div className="slide">
            <ul className="category-list">
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-MOTOS-ENERO-2025.webp" alt="" />
                  <p>Motociclismo</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-DERMO-ENERO-2025.webp" alt="" />
                  <p>Dermocosmética</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-ACCESORIOS-ENERO-2025.webp" alt="" />
                  <p>Accesorios</p>
                </a>
              </li><li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-ORGANIZADOR-ENERO-2025.webp" alt="" />
                  <p>Organizadores</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-BANOS-ENERO-2025.webp" alt="" />
                  <p>Baños</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-MALETAS-ENERO-2025.webp" alt="" />
                  <p>Maletas</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-CALZADO-ENERO-2025.webp" alt="" />
                  <p>Calzado</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-MASCOTAS-ENERO-2025.webp" alt="" />
                  <p>Mascotas</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-CAMARA-ENERO-2025.webp" alt="" />
                  <p>Cámaras</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-INTERNACIONAL-ENERO-2025.webp" alt="" />
                  <p>Internacional</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-PISOS-ENERO-2025.webp" alt="" />
                  <p>Pisos</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-GRIFOS-ENERO-2025.webp" alt=""/>
                  <p>Grifería</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <label htmlFor="slide1" className="carousel-btn prev">❮</label>
        <label htmlFor="slide2" className="carousel-btn next">❯</label>
      </div>
    </div>
    </>
  )
}
