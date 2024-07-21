import React from 'react'
import './Home.css'
import SideBar from '../../components/Sidebar/SideBar'
import Feed from '../../components/Feed/Feed'
const Home = ({sideBar,catagory,setCatagory,apiData}) => {
  return (
    <div className='home-container'>
      <SideBar sideBar={sideBar} catagory={catagory} setCatagory={setCatagory}/>
      <Feed catagory={catagory} apiData={apiData}/>
    </div>
  )
}

export default Home
