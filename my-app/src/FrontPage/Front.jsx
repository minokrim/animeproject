import React from "react";
import goku from "../img/Goku.png";
import vegeta from "../img/Vegeta.png";
import gohan from "../img/Gohan.png";
import broly from "../img/broly.png";
import berus from "../img/berus.png";
import picolo from "../img/picolo.png";
import Footer from "../Footer/Footer";

import Test from "../TestNav/Test";
import "./Front.css";
export default function FrontPage() {
  return (
    <div className="homepage bg-black">
      <Test />
      <div className="front-container">
      
          <div className="front-container1">
            <div className="edit">
            <h1 className=" bor text-white mb-3">MyAnime
            </h1>
           
            </div>
            <p>
              "Welcomes you to a world where dreams and reality blur, where every
              story is an adventure waiting to unfold. Step into the realm of
              anime, where imagination knows no bounds, and let your journey
              begin."
            </p>
          </div>
          <div className="front-container2">
            <div className="imgs-set">
              <img src={goku} alt="" />
              <img src={vegeta} alt="" />
              <img src={gohan} alt="" />
              <img src={broly} alt="" />
              <img src={picolo} alt="" />
              <img src={berus} alt="" />
            </div>
          </div>
        
      </div>
      <Footer />
    </div>
  );
}
