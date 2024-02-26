import React from 'react'
import './Comments.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { deleteComment, editComment } from '../../actions/comments';

function DisplayComments({cId,userId,commentBody,commentOn,userCommented}) {
  const [Edit, setEdit] = useState(false)
  const [cmtBdy, setcmtBdy] = useState("");
  const [cmtId,setcmtId]=useState("")
  const dispatch=useDispatch()
  const CurrentUser=useSelector((state)=>state?.currentUserReducer);

  const handleEdit=(ctId,ctBdy)=>{
      setEdit(true);
      setcmtId(ctId);
      setcmtBdy(ctBdy);
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(!cmtBdy)
    {
      alert("type your comment")
    }else{
      dispatch(editComment({
        id:cmtId,
        commentBody:cmtBdy,
      }))
      setcmtBdy("")
    }
    setEdit(false);
  };

  const handleDel=(id)=>{
    dispatch(deleteComment(id))
  }
  return (
    <>{
      Edit ? (<>
       <form className='comments_sub_form_comments'
       onSubmit={handleOnSubmit}
        >
         <input type='text'
         onChange={e=>setcmtBdy(e.target.value)}
         placeholder='Edit comment...'
         value={cmtBdy}
         className='comment_ibox'
         />
         <input type='submit'  value="change" className='comment_add_btn_comment'/>
       </form>
      </>):(
        <p className='comment_body'>{commentBody}</p>

      )
    }
   <p className='usercommented'> - {userCommented} commented {moment(commentOn).fromNow()}</p>
   {
    CurrentUser?.result._id === userId &&(
   <p className='EditDel_DisplayComment'>
    <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
    <i onClick={()=>handleDel(cId)}>Delete</i>
   </p>

    )}
    </>
  )
}

export default DisplayComments