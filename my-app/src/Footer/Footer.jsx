import React from "react";
import './Footer.css'
import { FaAngleRight } from "react-icons/fa";
import animeLogo from "../img/alogo4.png"

export default function Footer(){



return(
    <div className="footer-big mt-4">
        <div className="footer-con d-flex ">
<div className="custom-width">
<p className="footer-p ">Copyright &copy; MyAnime.All Rights Reserved.</p>
</div>
  
<div className="costum-width2">
    <a className="footer-a me-3 "  ><FaAngleRight /> Contact</a>
   <a className="footer-a" ><FaAngleRight /> request</a>
</div>
        </div>

        <div className="footer-info d-flex flex-column justify-content-center align-items-center">
{/* <h1 className="footer-h">MyAnime</h1> */}
<img src={animeLogo} alt="" className="footerLogo"/>
<p className="footer-p2">Disclaimer:This site does not store an files on its server.All
    content are provided by non-affiliated third parties.
</p>
<div className="d-flex pb-3">
<a className="footer-a2" href="/animeproject"> Anime </a>
<a className="footer-a2 me-2 ms-2" href="/animeproject">MyAnime</a>
<a className="footer-a2" href="/animeproject">ReadManga</a>
</div>
        </div>




    </div>
)


}