import debounce from "lodash.debounce";
import React, { useState,useEffect, useCallback } from "react";
import { Link } from "react-router-dom";


function Popular( ) {
    const [popular, setPopular] = useState([]);


  const GetPopular =useCallback(
    debounce( async () => {
  const temp = await fetch("https://api.jikan.moe/v4/top/anime")
  .then(res => res.json());

setPopular(temp.data);

  },500),
  []
);

  useEffect(() => {
 GetPopular();
 

}, []);
console.log(popular);
    return (
      <div>
       
        <div className="container-fluid d-flex align-items-center">
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 d-flex justify-content-center ">
          {popular.map((item) => (
            <div className="col p-0 m-2 border border-custom darken-on-hover" key={item.mal_id}>
             <Link to= {`/viewmore/${item.mal_id}`}>
              <div className=" mt-0 ms-0  me-0 img-fluid d-flex justify-content-center align-content-center m-2  ">
              <img className="w-100 border rounded rounded-20 " src={item.images.jpg.large_image_url} alt="" />
              </div>
              </Link>
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

export default Popular;
