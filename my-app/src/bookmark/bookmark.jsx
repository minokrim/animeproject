import React from "react";
function Bookmark(){
    const [animation, setAnimation] = useState(null);

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
    return <div>

    </div>
}
export default Bookmark