import React from 'react'
import { useNavigate } from 'react-router-dom';

const VideoCard = ({videodata}) => {

    const {snippet , statistics}=videodata;
    const navigate = useNavigate()
    const handleClick = ()=>{

        navigate("/viewVideoPage")
    }
 
  return (
    <>{/* max-w-[300px] */}
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

export default VideoCard