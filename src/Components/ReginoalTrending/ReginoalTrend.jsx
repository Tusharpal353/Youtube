import React, { useEffect, useState } from 'react'
import { GOOGLE_APIKEY } from '../../Utils/Constant'



const ReginoalTrend = () => {
    
    const [country,setCountry]=useState("")

        const fetchData = ()=>{
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=${country}&maxResults=10&key=${GOOGLE_APIKEY}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
            
        }
  
  
        useEffect(()=>{
            fetchData()
        },[country])
  
        return (





    <div className='pt-4'>
        <button className='p-2' value={"in"} onClick={(e)=>setCountry(e.target.value)}>India </button>
        <button className='p-2' value={"Us"} onClick={(e)=>setCountry(e.target.value)}>Us </button>
        <button className='p-2' value={"BR"} onClick={(e)=>setCountry(e.target.value)}>Brazil </button>
        <button className='p-2' value={"JP"} onClick={(e)=>setCountry(e.target.value)}>Japan </button>
        <button className='p-2' value={"RU"} onClick={(e)=>setCountry(e.target.value)}>Russia </button>
        <button className='p-2' value={"DE"} onClick={(e)=>setCountry(e.target.value)}>Germany </button>
      

        </div>
  )
}

export default ReginoalTrend