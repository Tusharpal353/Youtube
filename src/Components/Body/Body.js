import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Recommendations from '../Recommendations/Recommendations'
import { VIDEO_URL } from '../../Utils/Constant'
import VideoCard from '../VideoCard/VideoCard'
import VideoContainer from '../VidoeContainer/VideoContainer'
const Body = ({}) => {
  
 


  return (
    <div className=' ' >
      <div className='flex '>
        

      
    <Sidebar/>
    <div className='flex flex-col'>
      <Recommendations/>
     <VideoContainer/>
    </div>
    </div>

    </div>
  )
}

export default Body