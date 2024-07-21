import React from 'react'
import { useParams } from 'react-router-dom'
import './Video.css'
import VideoFeed from '../../components/VideoFeed/VideoFeed'
import VideoSideBar from '../../components/Videosidebar/VideoSideBar'

const Video = () => {
  let {catagoryId,videoId}=useParams();
  return (
    <div className='video-container'>
      <VideoFeed videoId={videoId}/>
      <VideoSideBar />
    </div>
  )
}

export default Video
