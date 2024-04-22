import React, { useState, useEffect } from "react";
import "C:/Users/PC/Documents/test/my-app/src/viewmore/viewmore.css";
import Characters from "./characters";
function Viewmore({animeid}) {
  const [showTrailer, setShowTrailer] = useState(false);
  function playTrailer() {
    setShowTrailer(!showTrailer);
  }
  const [anime, setAnime] = useState([]);
  const GetAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v4/seasons/now").then(
      (res) => res.json()
    );

    setAnime(temp.data);
  };
  useEffect(() => {
    GetAnime();
  }, []);

  if (anime.length === 0) {
    return null;
  }

  const item = anime[10];
 
  // console.log(props.getId)
  return (
    <div className="main">
      <section className="container">
        <div key={item.id}>
          <div className="cont-1">
            <img src={item.images.jpg.large_image_url} alt="" />
            <div className="detailsSec">
              <p>{item.title}</p>
              <p>{item.synopsis}</p>
              <div className="descriptionContainer">
                <div className="desc1">
                  <p>Type: {item.type}</p>
                  <p>id :{animeid.id}</p>
                  {item.studios.map((studio) => (
                    <p key={studio.mal_id}>Studios: {studio.name}</p>
                  ))}
                  <p>Date aired: {item.aired.prop.from.year}</p>
                  <p>Status: {item.status}</p>
                  {item.genres.map((genres) => (
                    <p key={genres.mal_id}>Genres: {genres.name}</p>
                  ))}
                </div>
                <div className="desc2">
                  <p>Score: {item.score}</p>
                  <p>Rating: {item.rating}</p>
                  <p>Duration: {item.duration}</p>
                  <p>{item.source}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div className="section2">
          <p className="bookmark">Bookmark</p>
          <p onClick={playTrailer} className="trailer">
            Trailer
          </p>
        </div>
        <hr className="hr" />
        <div key={item.id} className="trailerVideo">
          {showTrailer && (
            <iframe
              src={item.trailer.embed_url}
              width="1100px"
              allowFullScreen
              height="550px"
            ></iframe>
          )}
        </div>
        <Characters />
      </section>
    </div>
  );
}
export default Viewmore;
