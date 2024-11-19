import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id);
  return (
    <>
      <iframe
        width="960"
        height="515"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default WatchPage;
