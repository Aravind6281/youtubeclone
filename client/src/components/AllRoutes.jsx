import React from 'react'
import Home from '../Pages/Home/Home';

import {
    Routes,
    Route,
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideo from '../Pages/YourVideo/YourVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import LikedVideo from '../Pages/LikedVideos/LikedVideo';
import WatchLater from '../Pages/WatchLater/WatchLater';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Channel from '../Pages/Channel/Channel';
import Search from '../Pages/Search/Search';

function AllRoutes({setEditCreateChannelBtn,setVidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideo' element={<LikedVideo/>}/>
        <Route path='/yourvideo' element={<YourVideo/>}/>
        <Route path='/VideoPage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route 
        path='/channel/:Cid' 
        element={<Channel 
          setVidUploadPage={setVidUploadPage}
          setEditCreateChannelBtn={setEditCreateChannelBtn}/>}
        />
        
        
       
    </Routes>
  )
}

export default AllRoutes