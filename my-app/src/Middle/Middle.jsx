import React from "react";
import './Middle.css';
import { Link } from "react-router-dom";
export default function Middle(){


return(
<div className="container-fluid justify-content-center align-items-center">
    <div className="costum-div costum-bg  d-flex align-items-center">
    <div className="costum-div2  d-flex  justify-content-center  ">
        <a className="link-costum p-0  " href="/animeproject">Newest</a>
        <Link to="/popular" className="middlelink">
        <a className="link-costum  p-0 " href="/popular">Popular</a>
        </Link>
    </div>
    
    </div>
    </div>
);

}