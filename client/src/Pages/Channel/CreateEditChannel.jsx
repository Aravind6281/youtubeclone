import React, { useState } from 'react'
import './CreateEditChannel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../../api';
import { updateChannelDate } from '../../actions/channelUser';

function CreateEditChannel({setEditCreateChannelBtn}) {
    // const CurrentUser = {
    //     result:{
    //       email:"aravindjatoth@gmail.com",
    //       joinedOn:"222-07-15T09:57:23.4892",
    //     },
    //   };

    const CurrentUser=useSelector((state)=>state.currentUserReducer)

  const [name,setName] = useState(CurrentUser?.result.name);
  const [desc,setDesc] = useState(CurrentUser?.result.desc);
const dispatch = useDispatch();
  const handleSubmit=()=>{
if(!name){
  alert("plz enter name !")
}else if(!desc)
{
  alert("plz enter description")
}else{
 dispatch(updateChannelDate(CurrentUser?.result._id,{ 
  name:name,
  desc:desc,
 }));
 setEditCreateChannelBtn(false)
 setTimeout(()=>{
  dispatch(login({email:CurrentUser?.result.email }));
 },5000);
}
  }
  return (
    <div className='container_CreateEditChannel'>
        <input
        onClick={()=>setEditCreateChannelBtn(false)} type="submit" 
        name='text'
        value={'x'}
        className='ibtn_x'
        />
    <div className='container2_CreateEditChannel'>
         <h1>
            {
              CurrentUser?.result.name ? <>
              Edit
             </> : 
             <>Create </>
            }
              Your Channel</h1>
              <input type="text"
              placeholder='Enter Your/Channel Name' 
              className='ibox'
              name='text'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
              <textarea 
              type='text'
              rows={15}
              placeholder={"Enter Channel Description"}
              className='ibox'
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
              />
              <input type="submit"
              value={'submit'}
              onClick={handleSubmit}
              className='ibtn' />
    </div>
    </div>
  )
}

export default CreateEditChannel