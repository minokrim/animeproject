import React,{useState,useEffect} from "react";
import "C:/Users/PC/Documents/test/my-app/src/viewmore/viewmore.css";
import Characters from "./characters";


function Viewmore2(){
    const [showTrailer, setShowTrailer] = useState(false);
    const [selectedId,setSelectedId]=useState()
    function playTrailer() {
      setShowTrailer(!showTrailer);
    }

    useEffect(() => {
        const storedId = JSON.parse(localStorage.getItem('selectedId'));
        if (storedId) {
          setSelectedId(storedId);
        }
      }, []);

    const [animation, setAnimation] = useState([]);
    useEffect(() => {
    const GetAnimation = async () => {
      const temp = await fetch(`https://api.jikan.moe/v4/anime/${selectedId}/full`)
      .then(res => res.json());
      setAnimation(temp.data);
    };
    

        GetAnimation()
        },[]);
        console.log(selectedId)

    if (animation.length === 0) {
     return null;
   }
console.log(animation)
    return <div className="main">
        <section className="container">
        <div key={animation.mal_id}></div>
        <div className="cont-1">
        <img src={animation.images.jpg.large_image_url} alt="" />
        <div className="detailsSec">
        <p>{animation.title}</p>
        <p>{animation.synopsis}</p>
        <div className="descriptionContainer">
            <div className="desc1">
            <p>Type: {animation.type}</p>
            <p>Studios: {animation.studios.name}</p>
            <p>Date aired: {animation.aired.prop.from.year}</p>
            <p>Status: {animation.status}</p>
            <p>Genres: {animation.genres.name}</p>
            </div>
            <div className="desc2">
            <p>Score: {animation.score}</p>
            <p>Rating: {animation.rating}</p>
            <p>Duration: {animation.duration}</p>
            <p>{animation.source}</p>
            <p>{animation.category}</p>
            </div>
        </div>
        </div>
        </div>

        <div className="section2">
          <p className="bookmark">Bookmark</p>
          <p onClick={playTrailer} className="trailer">
            Trailer
          </p>
        </div>

        <hr className="hr" />
        <div key={animation.id} className="trailerVideo">
          {showTrailer && (
            <iframe
              src={animation.trailer.embed_url}
              width="1100px"
              allowFullScreen
              height="550px"
            ></iframe>
          )}
        </div>
        <Characters/>
        </section>
    </div>
}
export default Viewmore2