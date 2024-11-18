import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Recommendations from '../Recommendations/Recommendations'

const Body = () => {
  return (
    <div className='flex '>
    <Sidebar/>
    <Recommendations/>
    </div>
  )
}

export default Body