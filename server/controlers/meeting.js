module.exports={
    getallMeeting:(req,res)=>{
        res.status(200).json(
            {
                message:'get all Meeting'
            }
        )
    },

    getallMeetingById:(req,res)=>{
        const UserId=req.params.UserId;
        res.status(200).json(
            {
                message:'get all MeetingById'
            }
        )
    },
    createMeeting:(req,res)=>{
        res.status(200).json(
            {
                message:'create a new Meeting'
            }
        )
    },
    updateMeetingById: (req,res)=>{
        const UserId=req.params.UserId;
        res.status(200).json(
            {
                message:'update all Meeting'
            }
        )
    },
    deleteMeetingById:(req,res)=>{
        const UserId=req.params.UserId;
        res.status(200).json(
            {
                message:'delete all Meeting'
            }
        )
    }
}