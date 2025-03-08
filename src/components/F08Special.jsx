export default function CategoryCarousel() {
    return (
      <>
        <div style={{display: "grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px", marginTop:"40px"}}>
        <a href="#" style={{textDecoration:"none"}}>
            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNERESPECIAL-CUIDADO-PIEL-MARZO-2025.webp" class="card-img-top" alt="..." width={"100%"}/>
        </a>
        <a href="#" style={{textDecoration:"none"}}>
            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNERESPECIAL-CONFITERIA-FEB-2025-A.webp" class="card-img-top" alt="" width={"100%"} />
        </a>
        <a href="#" style={{textDecoration:"none"}}>
            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNERESPECIAL-DESAYUNA-FEB-2025.webp" alt="" class="card-img-top" width={"100%"} />
        </a>
        <a href="#" style={{textDecoration:"none"}}>
            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNERESPECIAL-HELADOS-FEB-2025.webp" alt="" width={"100%"}/>
        </a>
    </div>
      </>
    )
}
  