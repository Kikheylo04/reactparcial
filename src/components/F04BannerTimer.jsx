import React from 'react'

export default function F04BannerTimer() {
  return (
    <div style={{backgroundColor: "#fe1653", display: "flex", alignItems:"center", justifyContent:"center", height:"100px", borderRadius:"20px 20px 0 0", marginTop:"40px"}}>
        <img src="https://plazavea.vteximg.com.br/arquivos/check_promotion_global.png?v=638041414534730000" 
        alt="" width="50px" height="30px"/>
        <div style={{color: "white", fontSize:"20px", fontWeight:"900",marginLeft: "20px"}}>
            ¡Solo por hoy!
        </div>
        <img src="https://cdn-icons-png.flaticon.com/128/992/992700.png" alt="" width={"30px"} height={"30px"} style={{marginLeft:"10px"}}/>
        <div style={{display:"flex", alignItems:"center", marginLeft:"-20px"}}>
          <ul style={{listStyle:"none", marginTop:"20px"}}>
            <li style={{marginLeft:"10px", padding:"10px", backgroundColor:"black", color:"white", borderRadius:"10px", width:"50px", textAlign:"center", fontWeight:"900"}}>14</li>
            <li style={{textAlign:"center", marginLeft:"10px", fontWeight:"900", color:"white"}}>Hrs</li>
          </ul>
        </div>
        <div style={{display:"flex", alignItems:"center", marginLeft:"-20px"}}>
          <ul style={{listStyle:"none", marginTop:"20px"}}>
            <li style={{marginLeft:"10px", padding:"10px", backgroundColor:"black", color:"white", borderRadius:"10px", width:"50px", textAlign:"center", fontWeight:"900"}}>32</li>
            <li style={{textAlign:"center", marginLeft:"10px", fontWeight:"900", color:"white"}}>Min</li>
          </ul>
        </div><div style={{display:"flex", alignItems:"center", marginLeft:"-20px"}}>
          <ul style={{listStyle:"none", marginTop:"20px"}}>
            <li style={{marginLeft:"10px", padding:"10px", backgroundColor:"black", color:"white", borderRadius:"10px", width:"50px", textAlign:"center", fontWeight:"900"}}>29</li>
            <li style={{textAlign:"center", marginLeft:"10px", fontWeight:"900", color:"white"}}>Seg</li>
          </ul>
        </div>
    </div>
  )
}
