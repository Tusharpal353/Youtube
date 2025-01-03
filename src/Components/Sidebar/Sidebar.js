
import { ArrowRight, Camera, Clock, History, Home, List, PlaySquare, ThumbsUp, User, Video } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const BarOpen = useSelector((store) => store.app.isMenuOpen)

  if (!BarOpen) return null

  return (
    <div className="w-64 h-full overflow-y-auto bg-white shadow-md fixed">
      <div className="py-4">
        <div className="mb-6">
          <SidebarItem to="/" icon={<Home className="w-5 h-5" />} text="Home" />
          <SidebarItem icon={<Video className="w-5 h-5" />} text="Shorts" />
          <SidebarItem icon={<PlaySquare className="w-5 h-5" />} text="Subscription" />
        </div>
        <hr className="my-4 border-gray-200" />
        <div className="mb-6">
          <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-700">
            <p>You</p>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
          <SidebarItem icon={<History className="w-5 h-5" />} text="History" />
          <SidebarItem icon={<List className="w-5 h-5" />} text="Playlist" />
          <SidebarItem icon={<Camera className="w-5 h-5" />} text="Your Videos" />
          <SidebarItem icon={<ThumbsUp className="w-5 h-5" />} text="Liked Videos" />
          <SidebarItem icon={<Clock className="w-5 h-5" />} text="Watch Later" />
        </div>
        <hr className="my-4 border-gray-200" />
        <div>
          <h2 className="px-4 py-2 text-sm font-semibold text-gray-700">Subscriptions</h2>
          {[...Array(10)].map((_, index) => (
            <SidebarItem key={index} icon={<User className="w-5 h-5" />} text={`User ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

const SidebarItem = ({ to, icon, text }) => (
  <Link to={to || "#"} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
    {icon}
    <span className="ml-3">{text}</span>
  </Link>
)

export default Sidebar