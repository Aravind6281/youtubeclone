import History from '../models/History.js'

export const HistoryController = async(req,res)=>{
    const HistoryData=req.body;

    // console.log(likeVideoData)

    const addToHistory= new History(HistoryData);

    try {
        await addToHistory.save();
        res.status(200).json('added to History')
        // console.log("DONE")
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllHistoryController= async (req, res)=>{
    try{
        const files= await History.find();
        res.status(200).send(files)
    }catch(error){
        res.status(404).send(error.message)      
    }
}
export const clearHistoryController=async (req,res)=>{
    const  {userId:userId}= req.params;
    // console.log(videoId,Viewer)
    try {
        await History.deleteMany({
           Viewer:userId,
            
        })
        res.status(200).json({message:"Removed from your History"})
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}