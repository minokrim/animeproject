import React, { useState, useEffect } from "react";
import "../viewmore/viewmore.css";
import Characters from "./characters";
import { useParams } from "react-router-dom";
import playbtn from "../img/play-button.png"
import bkmrk from "../img/bkmark.png"
import Test from "../TestNav/Test";
import Footer from "../Footer/Footer";
import Swal from 'sweetalert2'


function Viewmore3() {
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);
  const [animation, setAnimation] = useState(null);

  function clickedbmark(){
    var prevArray=JSON.parse(localStorage.getItem("array")) || [];
    (prevArray.push(id))
    localStorage.setItem("array", JSON.stringify(prevArray));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Succesfully Bookmarked Anime",
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  useEffect(() => {
    const getAnimation = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
        const data = await response.json();
        setAnimation(data?.data);
      } catch (error) {
        console.error("Error fetching animation:", error);
      }
    };

    if (id) {
      getAnimation();
    }
  }, [id]);

  if (!animation) {
    return null; 
  }

  return (
    <div className="main">
      <section className="container">
      <Test/>
        <div className="cont-1">
          <img src={animation.images?.jpg?.large_image_url} alt="" className="darken"/>
          <div className="detailsSec">
            <p className="title et">{animation.title}</p>
            <p className="title jt">{animation.title_japanese}</p>
            <p className="title synopsis">{animation.synopsis}</p>
            <div className="descriptionContainer">
              <div className="desc1">
                <p>Type: {animation.type}</p>
                <p>Studios: {animation.studios?.[0]?.name}</p>
                <p>Date aired: {animation.aired?.prop?.from?.year}</p>
                <p>Status: {animation.status}</p>
                <p>Genres: {animation.genres?.map(genre => genre.name).join(", ")}</p>
              </div>
              <div className="desc2">
                <p>Score: {animation.score}</p>
                <p>Rating: {animation.rating}</p>
                <p>Duration: {animation.duration}</p>
                <p>{animation.source}</p>
                <p>{animation.category}</p>
                <p>{animation.mal_id}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section2">
          <p className="bookmark" onClick={clickedbmark}> <img src={bkmrk} alt=""/>Bookmark</p>
          <p onClick={() => setShowTrailer(!showTrailer)} className="trailer"><img src={playbtn} alt="" />Trailer</p>
        </div>

        <hr className="hr" />
        <div key={animation.id} className="trailerVideo">
          {showTrailer && (
            <iframe
            title="Trailer"
              src={animation.trailer?.embed_url}
              width="1100px"
              allowFullScreen
              height="550px"
            ></iframe>
          )}
        </div>
      </section>
      <div className="characterSection">
      <Characters number={id}/>
      </div>
      <Footer />
    </div>
  );
}
export default Viewmore3;