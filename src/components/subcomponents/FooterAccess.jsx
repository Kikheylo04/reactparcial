import React from 'react'

export default function FooterAccess() {
  return (
    <>
        <div style={{display:"flex", alignItems:"center", gap:"60px", padding:"20px 600px", marginTop:"40px"}}>
            <div>
                <a href="#" style={{textDecoration:"none"}}>
                    <img src="https://plazavea.vteximg.com.br/arquivos/footer-benefit-pick-store.png" alt="" width={"100px"}/>
                    <span style={{color:"gray", fontWeight:"700"}}>Recojo en tienda</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/2722/2722985.png" alt="" width={"20px"}/>
                </a>
            </div>
            <div>
                <a href="#" style={{textDecoration:"none"}}>
                    <img src="https://plazavea.vteximg.com.br/arquivos/footer-benefit-delivery.png" alt="" width={"100px"}/>
                    <span style={{color:"gray", fontWeight:"700"}}>Delivery programado</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/2722/2722985.png" alt="" width={"20px"}/>
                </a>
            </div>
            <div>
                <a href="#" style={{textDecoration:"none"}}>
                    <img src="https://plazavea.vteximg.com.br/arquivos/footer-benefit-pay.png" alt="" width={"100px"}/>
                    <span style={{color:"gray", fontWeight:"700"}}>Métodos de pago</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/2722/2722985.png" alt="" width={"20px"}/>
                </a>
            </div>
        </div>
    </>
  )
}
