import React, {  useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import moment from 'moment'
import { convertViews } from '../../data'

const Feed = ({catagory}) => {
    const [apiData,setApiData]=useState([])

   const fetchApi=async ()=>{
    const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagory}&key=${API_KEY}`)
     const resp=await data.json();
     setApiData(resp.items)
     console.log(apiData);
    }
    useEffect(()=>{
      fetchApi()
    },[catagory])
   
  return (
    <div className='feed-container'>
      {apiData.map((p)=>{
        return(
        <Link to={`/${p.snippet.categoryId}/${p.id}`} className="card">
            <img src={p.snippet.thumbnails.standard.url} alt="" />
            <h3>{p.snippet.title}</h3>
            <p>{p.snippet.channelTitle}</p>
            <p>{convertViews(p.statistics.viewCount)} &bull; {moment(p.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
      })}
        
    </div>
  )
}

export default Feed
