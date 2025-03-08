// import "../../assets/css/searchBar.css"

export default function Searchbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#cc292e", color: "white"}}>
  <div class="container-fluid" style={{marginLeft: "20px"}}>
    <div style={{display: "flex"}}>
    <img src="https://plazavea.vteximg.com.br/arquivos/LogoPlazaVea.svg?v=638558150445000000" alt="" width={"120px"} height={"50px"} 
    style={{marginRight: "80px"}}/>
    <form class="d-flex" role="search" style={{marginRight: "450px"}}>
        <input class="form-control me-2" type="search" placeholder="Todas las categorias" aria-label="Search"
         style={{marginLeft: "20px", marginTop: "10px", paddingRight: "200px", borderRadius: "20px", height: "40px", width: "1000px"}}/>
    </form>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><img src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="" /></span>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{display: "flex"}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: "20px"}}>
        <li class="nav-item" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-0px"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/17777/17777754.png" alt="" width={"20px"} height={"20px"} style={{display: "flex"}}/>
          <a class="nav-link active" href="#" style={{color: "white"}}>Mis Pedidos</a>
        </li>
        <li class="nav-item dropdown" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-60px"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/15494/15494722.png" alt="" width={"20px"} height={"20px"} style={{ display: "flex"}}/>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}} >Mi Cuenta</a>
          <ul class="dropdown-menu">
            <li> <a class="dropdown-item" href="#">Inciar sesión/ Registrate</a></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Mis Pedidos</a></li>
            <li><a class="dropdown-item" href="#">Direcciones de entrega</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-40px", marginRight: "30px"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="" width={"20px"} height={"20px"} style={{display: "flex", marginLeft: "-20px"}}/>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
