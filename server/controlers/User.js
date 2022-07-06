module.exports={
    getallUsers:(req,res)=>{
        res.status(200).json(
            {
                message:'get all Users'
            }
        )
    },

    getallUsersId:(req,res)=>{
        const UserId=req.params.UserId;
        res.status(200).json(
            {
                message:'get all Users'
            }
        )
    },
    createUser:(req,res)=>{
        res.status(200).json(
            {
                message:'create a new Users'
            }
        )
    },
    updateUser:(req,res)=>{
        res.status(200).json(
            {
                message:'get all Users'
            }
        )
    },
    updateUserId: (req,res)=>{
        const UserId=req.params.UserId;
        res.status(200).json(
            {
                message:'get all Users'
            }
        )
    },
    deleteById:(req,res)=>{
        const UserId=req.params.UserId;
        res.status(200).json(
            {
                message:'delete all Users'
            }
        )
    }
}