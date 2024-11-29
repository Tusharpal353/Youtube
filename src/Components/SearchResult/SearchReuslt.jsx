import React, { useEffect, useState } from 'react'
import { GOOGLE_APIKEY } from '../../Utils/Constant'
import { useSearchParams } from "react-router-dom";
import SearchResultCard from './SearchResultCard';
const SearchReuslt = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [apiData,setApiData]=useState([])


  const fetchVideos = ()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&maxResults=10&key=${GOOGLE_APIKEY}`)
    .then(res => res.json())
    .then(res => {
      setApiData(res.items);
      console.log(res.items, "search page"); // Log the fetched data here
    });
}
useEffect(()=>{

  if(q){
    fetchVideos()

  }
},
  [q] )
  
  return (
    <div>

<div>

  {apiData.length>0?(

    apiData.map((item,index)=><SearchResultCard key={index} item={item}/>)
  ):(
    <p>loading </p>

  )
  }
      
    </div>

    </div>
  )
}

export default SearchReuslt



/* {apiData.length > 0 ? (
        apiData.map((item, index) => (
          <SearchResultCard key={index} item={item} />
        ))
      ) : (
        <p>Loading...</p>
      )} */