import React, { useEffect, useState } from "react";
import { GOOGLE_APIKEY } from "../../Utils/Constant";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
const SearchReuslt = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const handleClick = () => {
    if(id){
    navigate(`/watch/?v=${id}`);
  }};

  const fetchVideos = () => {
    let FetchData = fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&maxResults=10&key=${GOOGLE_APIKEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res.items);
        console.log(res.items, "search page"); // Log the fetched data here
      });
    
     
  };
  useEffect(() => {
    if (q) {
      fetchVideos();
    }
  }, [q]);

  const handleVideoSelect = (videoId) => {
    setId(videoId);
    console.log("Selected Video ID:", videoId);
  };

  return (
    <div>
      <div onClick={handleClick } className="cursor-pointer">
        {apiData.length > 0 ? (
          apiData.map((item, index) => (
            <div onClick={() =>{ handleVideoSelect(item.id.videoId)
              handleClick()
            }}>
              <SearchResultCard key={index} item={item} />
            </div>
          ))
        ) : (
          <p>loading </p>
        )}
      </div>
    </div>    
  );
};

export default SearchReuslt;
