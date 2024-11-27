import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_APIKEY } from "../../Utils/Constant";
import { ThumbsUp } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const id = searchParams.get("v");
  const COMMENTS_URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&maxResults=20&key=${GOOGLE_APIKEY}`;

  useEffect(() => {
    if (id) {
      fetchVideoDetails();
      getComments();
    }
  }, [id]);

  const fetchVideoDetails = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${GOOGLE_APIKEY}`
    );
    const json = await response.json();

    if (json.items && json.items.length > 0) {
      const channelId = json.items[0].snippet.channelId;
      fetchChannelDetails(channelId);
    }
  };

  const fetchChannelDetails = async (channelId) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${GOOGLE_APIKEY}`
    );
    const json = await response.json();

    if (json.items && json.items.length > 0) {
      setChannelDetails(json.items[0]);
    }
  };

  const getComments = () => {
    fetch(COMMENTS_URL)
      .then((res) => res.json())
      .then((data) => setComments(data.items || []));
  };

  return (
    <div className="ml-28">
      {/* Video Player */}
      <div className="pt-10">
        <iframe
          className="rounded-lg"
          width="960"
          height="515"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Channel Details */}
      {channelDetails && (
        <div className="mt-5 p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center">
            <img
              src={channelDetails.snippet.thumbnails.default.url}
              alt="Channel Logo"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">{channelDetails.snippet.title}</h2>
              <p className="text-sm text-gray-600">
                Subscribers: {channelDetails.statistics.subscriberCount}
              </p>
              <p className="text-sm text-gray-600">
                Videos: {channelDetails.statistics.videoCount}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm">{channelDetails.snippet.description}</p>
        </div>
      )}

      {/* Comments Section */}
      <div className="font-bold text-xl m-2">Comments</div>
      <div className="border-b-2 p-2"></div>

      {comments.map((cmt) => (
        <CommentCard key={cmt.id} cmt={cmt} />
      ))}
    </div>
  );
};

export default WatchPage;

const CommentCard = ({ cmt }) => {
  const publishedDate = cmt.snippet.topLevelComment.snippet.publishedAt;
  const relativeDate = formatDistanceToNow(new Date(publishedDate), {
    addSuffix: true,
  });

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
          <p className="text-sm font-semibold">
            {cmt.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className="text-xs text-gray-500 pl-2">{relativeDate}</p>
        </div>
        <h1>{cmt.snippet.topLevelComment.snippet.textDisplay}</h1>
        <div className="flex">
          <ThumbsUp className="w-5 h-5" />
          <p>{cmt.snippet.topLevelComment.snippet.likeCount}</p>
        </div>
      </div>
    </div>
  );
};
