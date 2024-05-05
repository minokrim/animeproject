import { useLocation } from 'react-router-dom';
import Test from './TestNav/Test';
import './Sucess.css';
import MyCarousel from './Carousel/Carousel';
import { Link } from "react-router-dom";

export default function Textt() {
  const location = useLocation();
  const data = location.state?.data || [];
  const inputValue = location.state?.inputValue;
  const filteredData = data?.filter(item =>
     item.title.toLowerCase().includes(inputValue.toLowerCase()));
  

  return (


  <div className='bg-black'>
    <Test />
       <MyCarousel />
        <div className="container-fluid d-flex align-items-center">
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 d-flex justify-content-center ">
          {filteredData && filteredData.map((item) => (
            <div className="col p-0 m-2 border border-custom darken-on-hover" key={item.mal_id}>
              <div >
              <Link to= {`/viewmore/${item.mal_id}`}>
              <div className=" mt-0 ms-0  me-0 img-fluid d-flex justify-content-center align-content-center m-2  ">
              <img className="w-100 border rounded rounded-20 " src={item.images.jpg.large_image_url} alt=""/>
              </div>
              </Link>
              </div>
              <div className=" ">
                <p className="text-center text-white ">{item.title}</p>
                <p className="text-center text-white">{item.type}{' '}{item.aired.prop.from.year}</p>
              </div>
             
              {/* Add other item properties you want to display */}
            </div>
          ))}
            </div>
        </div>

      </div>
  );
}

