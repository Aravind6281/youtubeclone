import comment from '../models/comments.js'
import mongoose from 'mongoose'


// editComment

export const postComment= async(req,res)=>{
    const commentData= req.body;
    // console.log(commentData);
    const postcomment = new comment(commentData);
    try {
        await postcomment.save();
        res.status(200).json("Posted the comment");
    } catch (error) {
        res.status(400).json(error)
        
    }
}



export const getComment= async (req, res)=>{
    try{
        const commentList= await comment.find();
        res.status(200).send(commentList)
    }catch(error){
        res.status(404).send(error.message)      
    }
}
// export const deleteComment=async (req,res)=>{
//     const  {id:_id}= req.params;
//     try {
//         await comment.findByIdAndRemove(_id);
//         res.status(200).json({message:"deleted your comment"})
//     } catch (error) {
//         res.status(400).json({message: error.message})
        
//     }
// }

export const deleteComment = async (req, res) => {
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("comments Unavailable...")
    }

    try {
        const deletedComment = await comment.findByIdAndDelete(_id); // Corrected method to findByIdAndDelete
        if (!deletedComment) {
            res.status(404).json({ message: "Comment not found" }); // If no comment found with the provided ID
            return;
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const editComment=async (req,res)=>{
    const {id:_id}=req.params;
    const {commentBody}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("comments Unavailable...")
    }
    try {
        const updateComment = await comment.findByIdAndUpadate(
            _id,
            {
                $set:{"commentBody":commentBody}
            }
            )
            res.status(200).json(updateComment)
        } catch (error) {
        res.status(400).json(error)
        // console.log(error)

        
    }
}