/* 

without responsive

import React from 'react'
import { useNavigate } from 'react-router-dom';

const VideoCard = ({videodata}) => {

    const {snippet , statistics}=videodata;
    const navigate = useNavigate()
    const handleClick = ()=>{

        navigate("/viewVideoPage")
    }
 
  return (
    <>
        <div className='border  min-h-60 w-full h-full rounded-xl shadow-xl m-2 ' onClick={handleClick}>
            <img className='w-full rounded-t-xl' src={snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className='p-2'>
              <h1 className='font-semibold'>{snippet.title}</h1>
              <h1 className='text-gray-600 text-sm'>{snippet.channelTitle}</h1>
              <p className='text-gray-600 text-sm'>views {statistics.viewCount}</p>
            </div>
        </div>
    </>
  )
}

export default VideoCard */



import React from 'react'
import { useNavigate } from 'react-router-dom';

const VideoCard = ({videodata}) => {
    const {snippet , statistics} = videodata;
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/viewVideoPage")
    }
 
    return (
        <div className='border rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer' onClick={handleClick}>
            <img className='w-full rounded-t-xl object-cover h-40 sm:h-36 md:h-48 lg:h-40' src={snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className='p-2 sm:p-3'>
                <h1 className='font-semibold text-sm sm:text-base line-clamp-2'>{snippet.title}</h1>
                <h2 className='text-gray-600 text-xs sm:text-sm mt-1'>{snippet.channelTitle}</h2>
                <p className='text-gray-600 text-xs sm:text-sm mt-1'>{parseInt(statistics.viewCount).toLocaleString()} views</p>
            </div>
        </div>
    )
}

export default VideoCard

