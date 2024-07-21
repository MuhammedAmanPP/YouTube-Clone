
import './NavBar.css'
import menuIcon from '../../assets/menu-icon.png'
import searchIcon from '../../assets/search-icon.png'
import createIcon from '../../assets/video-create-icon.png'
import notification from '../../assets/notification-icon.png'
import jack from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const NavBar = ({setSideBar}) => {
  return (
    <nav>
      <div className="left-nav flex-div">
          <img src={menuIcon} alt="" onClick={()=> setSideBar(prev => prev===false ? true : false)}/>
      </div>
      <div className="middle-nav flex-div">
        <div className="search-box flex-div">
             <input type="text" />
             <img src={searchIcon} alt="" />    
        </div>
       
      </div>
      <div className="right-nav flex-div">
          <img src={createIcon} alt="" />
          <img src={notification} alt="" />
          <Link to={'/'}><img src={jack} alt="" className='nav-jack'/></Link>
      </div>
    </nav>
  )
}

export default NavBar
