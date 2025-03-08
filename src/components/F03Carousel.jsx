export default function F03Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" style={{width: "100%"}}>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNER-PRINCIPAL-NF-D-06-MAR.webp?v=638768148625600000"
              class="d-block w-100"
              alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNER-PRINCIPAL-FOOD-D-06-MAR.webp?v=638768148633300000" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev"
          type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"style={{ marginRight: "267px", backgroundColor: "black", padding: "25px", borderRadius: "0 30px 30px 0" }} ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" style={{ marginLeft: "265px", backgroundColor: "black", padding: "25px", borderRadius: "30px 0 0 30px" }} aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
