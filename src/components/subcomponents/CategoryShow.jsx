import React from 'react'

export default function CategoryShow() {
  return (
    <>
        <div style={{marginTop:"40px", display:"flex", justifyContent:"center", gap:"30px"}}>
            <div style={{backgroundColor:"rgb(235, 235, 235)", padding:"24px 31px", borderRadius:"8px", boxShadow:"0 2px 8px rgba(51,51,51,.3)"}}>
                <h2 style={{fontSize:"30px", fontWeight:"700"}}>Supermercado</h2>
                <div style={{display:"flex", gap:"20px"}}>
                    <p>Descubre nuestra gran variedad de productos y recibe tu pedido el mismo día, desde 2 horas.</p>
                    <button style={{backgroundColor:"#9d1e23", color:"white", padding:"0 24px", borderRadius:"24px", border:"none", fontWeight:"700", height:"50px"}}>Ingresar</button>
                </div>
                <div style={{marginTop:"40px"}}>
                    <ul style={{display:"flex", gap:"20px", listStyle:"none"}}>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-PESCADOS-ENERO-B.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700", textAlign:"center"}}>Carnes, Aves, Pescados</p>
                        </li>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-LACTEOS-10-ENERO-2023-vv.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700", textAlign:"center"}}>Lácteos</p>
                        </li>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-FRUTAS-10-ENERO-2023.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700", textAlign:"center"}}>Frutas y Venduras</p>
                        </li>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-ABARROTES-ABRIL-MAYO-A.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700", textAlign:"center"}}>Abarrotes</p>
                        </li>
                    </ul>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <a href="#" style={{color:"#9d1e23", fontWeight:"700", textDecoration:"none", textAlign:"center"}}>Ver todas las categorías</a>
                </div>
            </div>
            <div style={{backgroundColor:"rgb(235, 235, 235)", padding:"24px 31px", borderRadius:"8px", boxShadow:"0 2px 8px rgba(51,51,51,.3)"}}>
                <h2 style={{fontSize:"30px", fontWeight:"700"}}>Electro, hogar y más</h2>
                <div style={{display:"flex", gap:"20px"}}>
                    <p>Lo último en tecnología, electrohogar, deportes, moda, infantil y más. Entregas desde 24 hrs.</p>
                    <button style={{backgroundColor:"#9d1e23", color:"white", padding:"0 24px", borderRadius:"24px", border:"none", fontWeight:"700", height:"50px"}}>Ingresar</button>
                </div>
                <div style={{marginTop:"40px"}}>
                    <ul style={{display:"flex", gap:"20px", listStyle:"none"}}>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://www.plazavea.com.pe/arquivos/HP-CATEGORIAS-NF-PG-TV-18-OCTUBRE.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700"}}>Televisores</p>
                        </li>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-JUGUETES-21-NOV.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700"}}>Juguetes</p>
                        </li>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-CAMAS-18-OCTUBRE.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700"}}>Dormitorio</p>
                        </li>
                        <li style={{width:"120px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-LAVADORA-18-OCTUBRE.webp" alt="" width={"100%"}/>
                            <p style={{fontWeight:"700"}}>Linea Blanca</p>
                        </li>
                    </ul>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <a href="#" style={{color:"#9d1e23", fontWeight:"700", textDecoration:"none", textAlign:"center"}}>Ver todas las categorías</a>
                </div>
            </div>
        </div>
    </>
  )
}
