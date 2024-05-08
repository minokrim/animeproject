import './Test.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect }  from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import {Link} from "react-router-dom"


export default function Test (){
    const[toggle,setToggle]=useState(false)
    const HandleNav = () => {setToggle(!toggle)}
    const[toggleSearch,setToggleSearch]=useState(false)
    const WhateverSearch = () => {setToggleSearch(!toggleSearch)}

    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);


  
  const SearchAnime =
    async (inputValue) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${inputValue}`);
      const data = await response.json();
      setData(data?.data);
    }
  
    const debouncedSearch = useCallback(debounce(SearchAnime, 300,{ leading: true, trailing: true }), []);
  

    useEffect(() => {
      if (inputValue.trim() !== '') {
        debouncedSearch(inputValue);
      } else {
        setData([]);
      }
    }, [inputValue, debouncedSearch]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
   
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();      
      await debouncedSearch.flush();
      navigate('/test', { state:{inputValue,data}});
    }
  };

    
return(
    
<div className='big-container'>
    <div className='test1'>
    <h1 className='header-1'>MyAnime</h1> 
    <div className={toggle? 'test2 active':'test2'}>

      <Link to="/">
      <a className='link d-flex align-items-center justify-content-center' href='/animeproject'><FaHome  className='text-white '/></a>
      </Link>

        <a className='link d-flex align-items-center justify-content-center' href='/'><BiMoviePlay className='text-white'/></a>
        <a className='link d-flex align-items-center justify-content-center' href='/'><PiTelevisionSimpleFill className='text-white '/></a>    
        <Link to="/bookmark">
        <a className='link d-flex align-items-center justify-content-center' href='/'><FaBookmark className='text-white'/></a>    
        </Link>
    </div>

       
    
    <div className='whatever'>
    <div className='d-flex align-items-center justify-content-center'>
     <input className='search-input'  type="text" />
        <button className='button-submit'onClick={WhateverSearch}><FaSearch  className='text-white'/></button>
        <span className='burg' onClick={HandleNav}><RxHamburgerMenu className='w-100' /></span>
        </div>
        
        <h1  className='this'>What</h1>
    
        </div>
        </div>
        <form action="">
         <div className={toggleSearch? 'input1 active':'input1 '}>
            <input className='cost-input'
             type="text"
             placeholder='Search...' 
             value={inputValue}
             onChange={handleInputChange}
             onKeyPress={handleKeyPress}/>
        </div>
        </form>
       
    </div>
)

}
