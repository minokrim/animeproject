import React , {useEffect,useState}from "react";
import "../bookmark/bookmark.css"
function Bookmarksection({bookmarkclicked,number}){
  const [characters,setCharacters]=useState([])
  const [bookmark,setbookmark]=useState(null)
  const [bmarkclicked,setbmarkclicked]=useState()

  function bookmarkpage(){
    setbmarkclicked(bookmarkclicked)
    console.log(bmarkclicked)
  }

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (bookmarkclicked) {
          const response = await fetch(`https://api.jikan.moe/v4/anime/20/full`);
          const data = await response.json();
          setCharacters(data?.data);
          console.log("Data fetched successfully",data);
          console.log(number)
          console.log(response)
          console.log(bookmarkclicked)
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, [bookmarkclicked]);

  useEffect(()=>{
    if(characters) {
      console.log(characters)
      var bmark= <div key={characters.mal_id}>
        <img src={characters.images?.jpg?.large_image_url} alt="" />
        <p>{characters.mal_id}</p>
</div>
setbookmark(bmark)

    }
    else {
      // If characters array is empty, set a fallback or handle the condition accordingly
      setbookmark(null); // Resetting the bookmark state
    }
  },[characters])

  return <div className="bookmarkMain">
    <section onLoad={bookmarkpage}>
      {bookmark}
    </section>

  </div>
}
export default  Bookmarksection