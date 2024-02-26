import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import AllRoutes from './components/AllRoutes.jsx';
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar.jsx';
import CreateEditChannel from './Pages/Channel/CreateEditChannel.jsx';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser.js';
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx';
import { getAllVideo} from './actions/Video.js';
import {  getAlllikedVideo } from './actions/likedVideo.js';
import { getAllwatchLater } from './actions/watchLater.js';
import { getAllHistory } from './actions/History.js';


function App() {
 const dispatch=useDispatch()
 
useEffect(()=>{
  dispatch(fetchAllChannel());
  dispatch(getAllVideo());
  dispatch(getAlllikedVideo());
  dispatch(getAllwatchLater());
  dispatch(getAllHistory());
},[dispatch])

   const[ toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none",
   })
   const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
   }
   const [vidUploadPage,setVidUploadPage]=useState(false)
   const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false)
    return(
     <Router>
      {
        vidUploadPage &&  <VideoUpload setVidUploadPage={setVidUploadPage}/>
      }
      {
        EditCreateChannelBtn &&  <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      }
          <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn} toggleDrawer={toggleDrawer} />
          {
             <DrawerSidebar
             toggleDrawer={toggleDrawer}
             toggleDrawerSidebar={toggleDrawerSidebar}
             />
          }
         <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>
          
     </Router>
    );
}

export default App;
