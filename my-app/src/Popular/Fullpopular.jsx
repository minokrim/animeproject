import MyCarousel from "../Carousel/Carousel";
import Middle from "../Middle/Middle";
import Popular from "./Popular";
import Test from "../TestNav/Test";

export default function FullPage(){

return(<div className="app d-flex flex-column justify-content-center align-items-center">
      <Test />
<MyCarousel  />
   <Middle />    
<Popular />
        
     
    </div>
    );

}