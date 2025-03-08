import CategoryAd from "./subcomponents/CategoryAd";
import CategoryCarousel from "./subcomponents/CategoryCarousel";
import CategoryShow from "./subcomponents/CategoryShow";

export default function F07Category() {
  return (
    <>
        <CategoryShow/>
        <div style={{fontWeight:"700", fontSize:"30px", marginTop:"40px"}}>Explora las nuevas categorías</div>
        <CategoryCarousel/>
        <CategoryAd />
    </>
  )
}
