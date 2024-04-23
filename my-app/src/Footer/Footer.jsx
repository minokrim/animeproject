import React from "react";
import './Footer.css'
import { FaAngleRight } from "react-icons/fa";
export default function Footer(){



return(
    <div className="footer-big mt-4">
        <div className="footer-con d-flex ">
<div className="w-50">
<p className="footer-p ">Copyright &copy; MyAnime.All Rights Reserved.</p>
</div>
<div className="d-flex w-50 justify-content-end me-3">
    <a className="footer-a me-3 " href='' ><FaAngleRight /> Contact</a>
   <a className="footer-a" href=""><FaAngleRight /> request</a>
</div>
        </div>

        <div className="footer-info d-flex flex-column justify-content-center align-items-center">
<h1 className="footer-h">MyAnime</h1>
<p className="footer-p2">Disclaimer:This site does not store an files on its server.All
    content are provided by non-affiliated third parties.
</p>
<div className="d-flex pb-3">
<a className="footer-a2" href="/"> Anime </a>
<a className="footer-a2 me-2 ms-2" href="/">MyAnime</a>
<a className="footer-a2" href="/">ReadManga</a>
</div>
        </div>




    </div>
)


}