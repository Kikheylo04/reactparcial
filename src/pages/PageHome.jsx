import F01BannerOfertas from "../components/F01BannerOfertas";
import F02Header from "../components/F02Header";
import F03Carousel from "../components/F03Carousel";
import F04BannerTimer from "../components/F04BannerTimer";
import F05DuoBanner from "../components/F05DuoBanner";
import F06TodayOnly from "../components/F06TodayOnly";
import F07Category from "../components/F07Category";
import F08Special from "../components/F08Special";
import F09Bestselling from "../components/F09Bestselling";
import F10Recommendation from "../components/F10Recommendation";
import F11Footer from "../components/F11Footer";

export default function PageHome() {
  return (
    <>
    <F01BannerOfertas/>
    <F02Header />
    <F03Carousel />
    <div className="container">
        <F04BannerTimer/>
        <F06TodayOnly/>
        <F05DuoBanner/>
        <F07Category/>
        <div style={{fontWeight:"700", fontSize:"30px", marginTop:"40px"}}>Descubre los especiales</div>
        <F08Special/>
        <F09Bestselling/>
    </div>
    <F10Recommendation/>
    <F11Footer/>
    </>
  )
}
