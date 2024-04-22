import MyCarousel from "../Carousel/Carousel";
import Middle from "../Middle/Middle";
import Popular from "./Popular";

export default function FullPage(){

return(<div className="app d-flex flex-column justify-content-center align-items-center">
      
<MyCarousel  />


   <Middle />    
<Popular />
        
     
    </div>
    );

}