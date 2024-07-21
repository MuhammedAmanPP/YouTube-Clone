import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import gaming from '../../assets/game-icon.png'
import automobile from '../../assets/automobile-icon.png'
import sport from '../../assets/sports-icon.png'
import entertinment from '../../assets/entertinment-icon.png'
import technology from '../../assets/technology-icon.png'
import music from '../../assets/music-icon.png'
import blog from '../../assets/blog-icon.png'
import news from '../../assets/news-icon.png'
import jack from '../../assets/jack.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import simon from '../../assets/simon.png'
import cameron from '../../assets/cameron.png'

function SideBar({sideBar,setCatagory,catagory}) {
  return (
    <div className='side-bar'>
      <div className={`flex-div side-content`} onClick={()=> setCatagory(1)}>
        <img src={home} alt="" className={catagory===1?'active':''}/> <p className={sideBar ? 'hide' : ''}>Home</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(20)}>
        <img src={gaming} alt="" className={catagory===20 ?'active':''}/> <p className={sideBar ? 'hide' : ''}>Gaming</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(23)}>
          <img src={automobile} alt="" className={catagory===23?'active':''}/> <p className={sideBar ? 'hide' : ''}>Automobiles</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(17)}>
          <img src={sport} alt="" className={catagory===17?'active':''}/> <p className={sideBar ? 'hide' : ''}>Sports</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(24)}>
          <img src={entertinment} alt="" className={catagory===24?'active':''}/> <p className={sideBar ? 'hide' : ''}>Entertinment</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(28)}>
          <img src={technology} alt="" className={catagory===28?'active':''}/> <p className={sideBar ? 'hide' : ''}>Technology</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(10)}>
          <img src={music} alt="" className={catagory===10?'active':''}/> <p className={sideBar ? 'hide' : ''}>Music</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(22)}>
          <img src={blog} alt="" className={catagory===22?'active':''}/> <p className={sideBar ? 'hide' : ''}>Blog</p>
      </div>
      <div className="flex-div side-content" onClick={()=> setCatagory(25)}>
          <img src={news} alt="" className={catagory===25?'active':''}/> <p className={sideBar ? 'hide' : ''}>News</p>
      </div>
      <hr />
      <div className="subscription">
        <h3 className={sideBar ? 'hide' : ''}>Subscriptions</h3>
     <div className="flex-div subscription-details">
        <img src={jack} alt="" /> <p className={sideBar ? 'hide' : ''}>MrBeast</p>
      </div>
      <div className="flex-div subscription-details">
        <img src={tom} alt="" /> <p className={sideBar ? 'hide' : ''}>Justin Bieber</p>
      </div>
      <div className="flex-div subscription-details">
        <img src={megan} alt="" /> <p className={sideBar ? 'hide' : ''}>Like Nastya</p>
      </div>
      <div className="flex-div subscription-details">
        <img src={cameron} alt="" /> <p className={sideBar ? 'hide' : ''}>Cocomelon</p>
      </div>
      <div className="flex-div subscription-details">
        <img src={simon} alt="" /> <p className={sideBar ? 'hide' : ''}>PewDiePie</p>
      </div>
      </div>
    </div>
  )
}

export default SideBar
