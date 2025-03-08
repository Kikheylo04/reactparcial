export default function Navbar1() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{height:"40px"}}>
  <div class="container-fluid" style={{display:"flex"}}>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style={{display:"flex", alignItems:"center"}}>
        <li class="nav-item" style={{display:"flex", alignItems:"center"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/7087/7087821.png" alt="" width={"20px"} height={"20px"} style={{marginLeft: "20px"}}/>
          <a class="nav-link" href="#" style={{fontSize:"16px", color:"black"}}>Supermercado</a>
        </li>
        <li class="nav-item" style={{display:"flex",alignItems:"center", marginLeft:"10px", width:"200px"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/1857/1857946.png" alt="" width={"20px"} height={"20px"} style={{marginLeft: "10px"}}/>
          <a class="nav-link" href="#" style={{fontSize:"16px", color:"black"}}>Electro y Hogar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"16px", color:"#042c9c", fontWeight:"800", marginLeft:"-40px"}}>makro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"16px", color:"#043c74", fontWeight:"900"}}>JOKR</a>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"1050px"}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Agora</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Financiera Oh!</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Inkafarma</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Mifarma</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Oechsle</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Promart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Real Plaza</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:"12px", color:"black"}}>Vivanda</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
