import React ,{useState,useEffect}from "react";
import "C:/Users/PC/Documents/test/my-app/src/viewmore/characterinfo.css"
import { useParams } from "react-router-dom";

function Charinfo (){
    const { id } = useParams();
    const [information,setInformation]=useState([])
    useEffect(() => {
    const GetInformation = async () => {
        try{
        const temp = await fetch(`https://api.jikan.moe/v4/characters/${id}`)
        const data = await temp.json();
        setInformation(data?.data);
        }catch (error) {
            console.error("Error fetching animation:", error);
          }
        };

        if (id) {
            GetInformation();
          }
        }, [id]);

        if (!information) {
            return null; 
          }
    return <div className="main"> 
        <section className="info-container">
            <div key={information.mal_id} className="info-body">
            <img src={information.images?.jpg?.image_url} alt="" className="darken" />
            <div className="info-details">
            <p className=" text name">Name: {information.name}</p>
            <p className="text name-foreign">{information.name_kanji}</p>
            <p className="text about">{information.about}</p>
            </div>
            </div>
        </section>

    </div>
}
export default Charinfo