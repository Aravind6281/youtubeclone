import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../components/Video/vid.mp4'
import { useSelector } from 'react-redux';
import './yourvideo.css'
function YourVideo() {

  const CurrentUser=useSelector((state)=>state?.currentUserReducer);
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === CurrentUser?.result?._id).reverse();


  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Channel:"62bafe6752cea35a6c30685f",
  //     title:"video 1",
  //     Uploader:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Channel:"cdd",
  //     title:"video 2",
  //     Uploader:"abc",
  //     description:"description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Channel:"add",
  //     title:"video 3",
  //     Uploader:"abc",
  //     description:"description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Channel:"add",
  //     title:"video 4",
  //     Uploader:"abc",
  //     description:"description of video 3"
  //   },
  //  ];
   return(
    <div className='container_Pages_App'>
    <LeftSidebar/>
    <div className='container2_Pages_App'>
      <div className='container_yourvideo'>
       <h1>Your video</h1>
       {
        CurrentUser?(<>
        <ShowVideoGrid vids={vids}/>
        
        </>):<>
        <h3>Plz Login To See Your Uploaded VideoList</h3></>
       }
      </div>
     </div>
   </div>
   )
}

export default YourVideo