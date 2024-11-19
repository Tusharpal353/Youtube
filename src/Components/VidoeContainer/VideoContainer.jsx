import React, { useEffect, useState } from "react";
import { VIDEO_URL } from "../../Utils/Constant";
import VideoCard from "../VideoCard/VideoCard";

const VideoContainer = () => {
    const [videoData, setVideoData] = useState([]);

    const fetchData = async () => {
        try {
            let data = await fetch(VIDEO_URL);
            const json = await data.json();
            setVideoData(json.items || []);
            console.log(json.items)
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap">
            {videoData ? videoData.map((card)=><VideoCard key={card.id} videodata={card} />)  : <p>loading</p>}
        </div>
    );
};

export default VideoContainer;