import React, { useEffect, useState } from "react";
import { VIDEO_URL } from "../../Utils/Constant";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

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
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2">
                {videoData ? videoData.map((card)=>
                <Link to={"/watch?v="+card.id}>
                <VideoCard className="w-full" key={card.id} videodata={card} />
                </Link>
                )  : <p>loading</p>}
            </div>
        </div>
    );
};

export default VideoContainer;
/* 
import React, { useEffect, useState } from "react";
import { VIDEO_URL } from "../../Utils/Constant";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videoData, setVideoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            let data = await fetch(VIDEO_URL);
            const json = await data.json();
            setVideoData(json.items || []);
            console.log(json.items)
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2">
                {videoData.map((card) => (
                    <Link key={card.id} to={"/watch?v=" + card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
                        <VideoCard videodata={card} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideoContainer; */