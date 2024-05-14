import React from "react";
import './Middle.css';
import { Link } from "react-router-dom";
export default function Middle(){


return(
<div className="container-fluid justify-content-center align-items-center">
    <div className="costum-div costum-bg  d-flex align-items-center">
    <div className="costum-div2  d-flex  justify-content-center  ">

        <Link to="/popular" className="l1">
        <a className="link-costum p-0  l1">Newest</a>
        </Link>

       <Link to="/main" className="l1">
       <a className="link-costum  p-0 " href="">Popular</a>
       </Link>
    </div>
    
    </div>
    </div>
);

}