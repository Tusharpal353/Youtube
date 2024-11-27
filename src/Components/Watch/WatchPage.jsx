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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Video Player */}
      <div className="mb-8">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Channel Details */}
      {channelDetails && (
        <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <img
              src={channelDetails.snippet.thumbnails.default.url}
              alt="Channel Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{channelDetails.snippet.title}</h2>
              <p className="text-sm text-gray-600">
                {parseInt(channelDetails.statistics.subscriberCount).toLocaleString()} subscribers
              </p>
              <p className="text-sm text-gray-600">
                {parseInt(channelDetails.statistics.videoCount).toLocaleString()} videos
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700">{channelDetails.snippet.description}</p>
        </div>
      )}

      {/* Comments Section */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">Comments</h3>
        <div className="border-b-2 border-gray-200 mb-4"></div>
        {comments.map((cmt) => (
          <CommentCard key={cmt.id} cmt={cmt} />
        ))}
      </div>
    </div>
  );
};

const CommentCard = ({ cmt }) => {
  const publishedDate = cmt.snippet.topLevelComment.snippet.publishedAt;
  const relativeDate = formatDistanceToNow(new Date(publishedDate), {
    addSuffix: true,
  });

  return (
    <div className="flex items-start mb-6">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={cmt.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="User avatar"
      />
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <p className="font-semibold mr-2">
            {cmt.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className="text-xs text-gray-500">{relativeDate}</p>
        </div>
        <p className="text-gray-700 mb-2">{cmt.snippet.topLevelComment.snippet.textDisplay}</p>
        <div className="flex items-center text-gray-500">
          <ThumbsUp className="w-4 h-4 mr-1" />
          <p className="text-sm">{cmt.snippet.topLevelComment.snippet.likeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;