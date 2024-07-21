import React, { useState,useEffect } from 'react'
import './VideoSideBar.css'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../../data'
import { convertViews } from '../../data'
import moment from 'moment'

const VideoSideBar = () => {
    const {catagoryId}=useParams()
    const [apiData,setApiData]=useState([])
    const fetchApi=async ()=>{
        const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${catagoryId}&key=${API_KEY}`)
         const resp=await data.json();
         setApiData(resp.items)
         console.log(apiData);
        }
        useEffect(()=>{
          fetchApi()
        },[catagoryId])
       
  return (
    <div className='video-side-bar'>
        {apiData.map((p)=>{
            return(
        <Link to={`/${catagoryId}/${p.id}`} className="video-side-card flex-div">
           <img src={p.snippet.thumbnails.high.url} alt="" />
           <div className='side-card-details'>
            <h3 >{p.snippet.title}</h3>
           <p>{p.snippet.channelTitle}</p>
           <p style={{marginTop:'6px'}}>{convertViews(p.statistics.viewCount)} &bull; {moment(p.snippet.publishedAt).fromNow()}</p>
           </div>           
       </Link>
       )
        })}
       
    </div>
  )
}

export default VideoSideBar
