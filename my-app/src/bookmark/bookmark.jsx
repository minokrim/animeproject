import React, { useEffect, useState } from "react";
import "../bookmark/bookmark.css";
import trash from "../img/trashh.png"
import Test from "../TestNav/Test";
import { CiTrash } from "react-icons/ci";
function Bookmarksection() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var idString = JSON.parse(localStorage.getItem("array"));
        var array = idString.map(id => parseInt(id));
        const dataPromises = array.map(async (id) => {
          const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
          const data = await response.json();
          return data?.data;
        });
        const fetchedData = await Promise.all(dataPromises);
      
        setBookmarks(fetchedData);
        
        console.log("Data fetched successfully", fetchedData);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };

    fetchData();
  }, []);

  function deletebookmark(index){
    const newBookmarks = [...bookmarks];
    newBookmarks.splice(index, 1); // Remove the bookmark at the specified index
    setBookmarks(newBookmarks); // Update state
    updateLocalStorage(newBookmarks); // Update local storage
  }

  const updateLocalStorage = (newBookmarks) => {
    const idArray = newBookmarks.map(bookmark => bookmark?.mal_id);
    localStorage.setItem("array", JSON.stringify(idArray));
  };

  return (
    <div className="bookmarkMain">
            <Test/>
      <section className="bookmarkSection">
      <h1 className="bmarktitle">Your Bookmarked Anime</h1>
        {bookmarks.map((bookmark,index) => (
          <div key={bookmark?.mal_id} className="bmark">
            <img src={bookmark?.images?.jpg?.large_image_url} alt="" className="bmarkImage"/>
            <p className="bmarkTitle">{bookmark?.title}</p>
            <CiTrash onClick={() => deletebookmark(index)} className="trash"/>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Bookmarksection;
