export default function Navbar2() {
  return (
    <>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#cc292e", color: "white"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: "80px"}}>
      <li class="nav-item dropdown" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-60px"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/18586/18586040.png" alt="" width={"20px"} height={"20px"} style={{ display: "flex"}}/>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white", fontWeight: "700"}} >Compra por categorías</a>
          <ul class="dropdown-menu">
            <li> <a class="dropdown-item" href="#">Supermercado</a></li>
            <li><a class="dropdown-item" href="#">De vuelta al cole</a></li>
            <li><a class="dropdown-item" href="#">Tecnologia</a></li>
            <li><a class="dropdown-item" href="#">Electrohogar</a></li>
            <li> <a class="dropdown-item" href="#">Muebles</a></li>
            <li><a class="dropdown-item" href="#">Terraza y Aire Libre</a></li>
            <li><a class="dropdown-item" href="#">Dormitorio</a></li>
            <li><a class="dropdown-item" href="#">Decohogar</a></li>
          </ul>
        </li>
      </ul>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: "930px"}}>
      <li class="nav-item dropdown" style={{display: "flex", alignItems: "center"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/3037/3037255.png" alt="" width={"30px"} height={"30px"}/>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            Tarjeta Oh!
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Solicita tu Tarjeta oh!</a></li>
            <li><a class="dropdown-item" href="#">Ofertas oh! en Efecto y Hogar</a></li>
            <li><a class="dropdown-item" href="#">Ofertas oh! en Supermercado</a></li>
          </ul>
        </li>
        <li class="nav-item" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "10px"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/18395/18395749.png" alt="" width={"30px"} height={"30px"}/>
          <a class="nav-link" aria-current="page" href="#" style={{color: "#fff"}}>Internacional</a>
        </li>
        <li class="nav-item dropdown" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-50px"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/4121/4121446.png" alt="" width={"20px"} height={"20px"}/>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            Novedades
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">De vuelta al Cole</a></li>
            <li><a class="dropdown-item" href="#">Hogar Primavera Verano</a></li>
            <li><a class="dropdown-item" href="#">Tienda skincare</a></li>
            <li><a class="dropdown-item" href="#">Tienda de motos</a></li>
            <li><a class="dropdown-item" href="#">Mundo iPhone</a></li>
            <li><a class="dropdown-item" href="#">Vestuario Singular</a></li>
            <li><a class="dropdown-item" href="#">Vestuario Eureka</a></li>
            <li><a class="dropdown-item" href="#">Vea Pets</a></li>
            <li><a class="dropdown-item" href="#">Recicla consciente</a></li>
          </ul>
        </li>
        <li class="nav-item" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-70px"}}>
          <a class="nav-link" href="#" style={{color: "#fff"}}>Lista Vea</a>
        </li>
        <li class="nav-item" style={{display: "flex", alignItems: "center", width: "200px", marginLeft: "-120px"}}>
          <a class="nav-link" href="#" style={{color: "#fff"}}>Catálogos Vea</a>
        </li>
        <li class="nav-item dropdown" style={{display: "flex", alignItems: "center", marginLeft: "-80px"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            Blog
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Vea blog</a></li>
            <li><a class="dropdown-item" href="#">Ahorrar nunca fue tan bueno</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{display: "flex", alignItems: "center"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#fff"}}>
            Te Ayudamos
          </a>
          <ul class="dropdown-menu" style={{width: "195px", textAlign: "left"}}>
            <li width={"200px"}><a class="dropdown-item" href="#">Call Center Lima y 
            <br/> Provincias (01) 625 8000</a></li>
            <li><a class="dropdown-item" href="#">Cambios y devoluciones</a></li>
            <li><a class="dropdown-item" href="#">Nuestras Tiendas</a></li>
            <li><a class="dropdown-item" href="#">Tutorial de compra</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
