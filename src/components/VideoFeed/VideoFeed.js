import React, { useEffect, useState } from 'react'
import './VideoFeed.css'
import tom from '../../assets/tom.png'
import { Link } from 'react-router-dom'
import like from '../../assets/like-icon.png'
import dislike from '../../assets/dislike-icon.png'
import share from '../../assets/share-icon.png'
import { API_KEY } from '../../data'

const VideoFeed = ({videoId}) => {
   
   let [apiData,setApiData]=useState();


   const fetchApi= async ()=>{
      const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
      const res=await data.json()
      setApiData(res.items[0])
   }
   useEffect(()=>{
      fetchApi()
      console.log(apiData);
       window.scrollTo(0, 0);
   },[videoId])

  return (
   
    <div className='video-feed'>
       <div className="video-card">
         <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <h3>{apiData?apiData.snippet.title:'titleHere'} </h3>
         <div className='like-dislike-row flex-div'>
            <div className="chanel-name flex-div">   
            <img src={tom} alt="" />             
                <div className='subscribers-and-chanelname'>               
                   <h3>{apiData?apiData.snippet.channelTitle:'titleHere'}</h3>
                   <p>1.1M subscribers</p>
                </div>
                <Link>Join</Link>
                <button>Subscribe</button>
            </div>
             <div className="like-count flex-div">
                <div className="like flex-div">
                    <img src={like} alt="" /> <p>2.5K</p>
                    <img src={dislike} alt="" className='dislike'/>
                </div>
                <div className="share flex-div">
                    <img src={share} alt="" /> <p>Share</p>
                </div>
             </div>
         </div>
       </div>
    </div>
  )
}

export default VideoFeed
