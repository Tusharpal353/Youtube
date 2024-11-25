import { ArrowRight, Camera, Clock, History, Home, List,  PlaySquare,  ThumbsUp, User, Video } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const BarOpen = useSelector((store)=>store.app.isMenuOpen  )
 
if(!BarOpen) return null


  return (
    <div className='border h-full  overflow-y-auto max-h-full' >
      <div >
        <div className='w-60'>
          <div className='flex px-2 py-2'>
            <Home className='mx-2'/>
            <Link to={"/"}> Home</Link>
          </div>
          <div className='flex px-2 py-2'>
            <Video className='mx-2' />
            Shorts
          </div>
          <div className='flex px-2 py-2'>
            <PlaySquare className='mx-2'/>
            Subscription
          </div>
          <hr/>
        </div>
        <div className=''>
          <div className='flex'>
            <p>You</p>
            <ArrowRight className='mx-2'/>
          </div>
          <div className='flex px-2 py-2'>
            <History className='mx-2'/>
            History
          </div>
          <div className='flex px-2 py-2'>
            <List className='mx-2' />
            Playlist
          </div>
          <div className='flex px-2 py-2'>
            <Camera className='mx-2'/>
            your Videos
          </div>
          <div className='flex px-2 py-2'>
            <ThumbsUp className='mx-2'/>
            liked Videos
          </div>
          <div className='flex px-2 py-2'>
            <Clock className='mx-2'/>
            watchlater
          </div>
          <hr/>
        </div>
        <div>
          <h1>SubscriptIcon</h1>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
          <div className='flex py-2'>
            <User className='mx-2'/>
            <p>user1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

