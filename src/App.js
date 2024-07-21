import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import { Route , Routes } from "react-router-dom";
import Video from "./pages/Video/Video";
import { useState,useEffect } from "react";
import { API_KEY } from "./data";


function App() {
  const [sideBar,setSideBar]=useState(false)
  const [catagory,setCatagory]=useState(1)
  // const [apiData,setApiData]=useState([])
  // const fetchApi=async ()=>{
  //     const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagory}&key=${API_KEY}`)
  //      const resp=await data.json();
  //      setApiData(resp.items)
  //      console.log(apiData);
  //     }
  //     useEffect(()=>{
  //       fetchApi()
  //     },[catagory])
  // console.log(catagory);
  return (
    <div className="App">
      <NavBar setSideBar={setSideBar}/>
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} setSideBar={setSideBar} catagory={catagory} setCatagory={setCatagory} />}/>
        <Route path="/:catagoryId/:videoId" element={<Video />}/>
      </Routes>
    </div>
  );
}

export default App;
