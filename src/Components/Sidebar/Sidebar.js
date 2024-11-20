import { ArrowRight, Camera, Clock, History, Home, List,  PlaySquare,  ThumbsUp, User, Video } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const BarOpen = useSelector((store)=>store.app.isMenuOpen  )
 
if(!BarOpen) return null


  return (
    <div className='border h-screen  overflow-y-auto max-h-screen' >
      <div >
        <div className='w-60'>
          <div className='flex px-2 py-2'>
            <Home className=''/>
            <Link to={"/"}> Home</Link>
          </div>
          <div className='flex px-2 py-2'>
            <Video className='' />
            Shorts
          </div>
          <div className='flex px-2 py-2'>
            <PlaySquare className=''/>
            Subscription
          </div>
          <hr/>
        </div>
        <div className=''>
          <div className='flex'>
            <p>You</p>
            <ArrowRight/>
          </div>
          <div className='flex px-2 py-2'>
            <History className=''/>
            History
          </div>
          <div className='flex px-2 py-2'>
            <List className='' />
            Playlist
          </div>
          <div className='flex px-2 py-2'>
            <Camera className=''/>
            your Videos
          </div>
          <div className='flex px-2 py-2'>
            <ThumbsUp className=''/>
            liked Videos
          </div>
          <div className='flex px-2 py-2'>
            <Clock className=''/>
            watchlater
          </div>
          <hr/>
        </div>
        <div>
          <h1>SubscriptIcon</h1>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User/>
            <p>user1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar