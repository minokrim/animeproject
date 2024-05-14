import React from "react";
import './Middle.css';
import { Link } from "react-router-dom";
export default function Middle(){


return(
<div className="container-fluid justify-content-center align-items-center">
    <div className="costum-div costum-bg  d-flex align-items-center">
    <div className="costum-div2  d-flex  justify-content-center  ">
        <Link to="/animeproject">
        <a className="link-costum p-0  " href="">Newest</a>
        </Link>
       <Link to="/popular">
       <a className="link-costum  p-0 " href="">Popular</a>
       </Link>
    </div>
    
    </div>
    </div>
);

}