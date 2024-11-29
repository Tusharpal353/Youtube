import React from "react";


const SearchResultCard = ({ item }) => {
 

  return (
    <>
      <div className="flex mb-4 " >
        <div>
          <img
            className="rounded-xl shadow-xl"
            src={item.snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
        </div>
        <div className="ml-2">
          <h1 className="text-xl font-semibold">{item.snippet.title}</h1>
          <h1>{item.snippet.publishedAt}</h1>
          <h1>{item.snippet.channelTitle}</h1>
          <h1 className="text-gray-500 text-xs">{item.snippet.description}</h1>
        </div>
      </div>
    </>
  );
};

export default SearchResultCard;
