import './App.css';
import React, { useEffect } from'react';
import { useState } from 'react';
import Home from './HomePage/Home';
import Middle from './Middle/Middle';
import MyCarousel from './Carousel/Carousel';
import Test from './TestNav/Test';
import Footer from './Footer/Footer';
function App() {

 const [topAnime, setTopAnime] = useState([]);


  const GetTopAnime = async () => {
  const temp = await fetch("https://api.jikan.moe/v4/seasons/now")
  .then(res => res.json());

setTopAnime(temp.data);

  };

  useEffect(() => {
 GetTopAnime();
 

}, []);
console.log(topAnime);
   
  return (
    <div className="app d-flex flex-column justify-content-center align-items-center">


<Test />
<MyCarousel />
<Middle /> 
<Home topAnime={topAnime}/>    
<Footer /> 
    </div>
  );
}

export default App;
