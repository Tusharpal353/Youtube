import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { COMMENTS_URL } from "../../Utils/Constant";
import { ThumbsUp } from "lucide-react";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const id = searchParams.get("v");
  console.log(id + " id");

  useEffect(() => {
    getComments();
    console.log(comments);
  }, []);

  const getComments = () => {
    fetch(COMMENTS_URL)
      .then((res) => res.json())
      .then((res) => setComments(res.items));
  };

  return (
    <div className="ml-28">
      <div >
          <iframe
            width="960"
            height="515"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            style={{ border: "none" }} // Use CSS to remove the border
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
      </div>

{
    comments.map(cmt=><CommenCard cmt={cmt} comments={comments}/>)
}

      {/* <div className="flex">
        <div>
          <img className="rounded-full"
            src={
              comments[5].snippet.topLevelComment.snippet.authorProfileImageUrl
            }
            alt="channel logo"
          />
        </div>
        <div>
          <div className="flex">
            <p>
              {comments[5].snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p>{comments[5].snippet.topLevelComment.snippet.publishedAt}</p>
          </div>
          <h1>
            {" "}
            comment {comments[5].snippet.topLevelComment.snippet.textDisplay}
          </h1>
          <div className="flex">
            <ThumbsUp />
            <p>{comments[5].snippet.topLevelComment.snippet.likeCount}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WatchPage;


const CommenCard = ({ cmt }) => {
    return (
      <div className="flex py-2">
        <div className="p-3">
          <img
            className="rounded-full w-10"
            src={cmt.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt="channel logo"
          />
        </div>
        <div>
          <div className="flex">
            <p className="text-sm font-semibold">{cmt.snippet.topLevelComment.snippet.authorDisplayName}</p>
            <p>{cmt.snippet.topLevelComment.snippet.publishedAt}</p>
          </div>
          <h1>
            {cmt.snippet.topLevelComment.snippet.textDisplay}
          </h1>
          <div className="flex">
            <ThumbsUp />
            <p>{cmt.snippet.topLevelComment.snippet.likeCount}</p>
          </div>
        </div>
      </div>
    );
  };
  