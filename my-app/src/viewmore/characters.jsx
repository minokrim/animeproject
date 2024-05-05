import React ,{useState,useEffect}from "react"
import "../viewmore/character.css"
import { Link } from "react-router-dom";

function Characters({number}){
    const [characters,setCharacters]=useState([])
    const GetCharacters = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${number}/characters`)
    .then(res => res.json());
    setCharacters(temp.data);
    };

useEffect(() => {
    GetCharacters()
    },[]);
console.log(number)
    return <div>
        <section>
            {characters.map(char=>(
                <div key={char.mal_id} className="darken"> 
                <Link to={`/characterinfo/${char.character.mal_id}`}>
                <img src={char.character.images.jpg.image_url} alt="" className="charimage"/>
                </Link>
                <p className="role name">{char.character.name}</p>
                <p className="role"><span>Role: </span>{char.role}</p>
                </div>
            ))}
        </section>
    </div>
}
export default Characters



